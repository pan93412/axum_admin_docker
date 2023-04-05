FROM rust:1.68-bookworm AS builder

WORKDIR /src

# use sparse to speed up the dependencies download process
ENV CARGO_REGISTRIES_CRATES_IO_PROTOCOL=sparse

RUN apt update \
  && apt install mold

COPY . .

RUN mkdir /app \
  # move the files to preserve to /app
  && (cat .zeabur-preserve | xargs -I {} cp -r {} /app/{}) \
  # move the binary to the root of the container
  && mold -run cargo install --root /app --path .

FROM debian:bookworm-slim

RUN apt-get update \
  && apt-get install -y openssl \
  && rm -rf /var/lib/apt/lists/*

RUN useradd -m -s /bin/bash zeabur
USER zeabur

WORKDIR /app

COPY --from=builder /app/* /app/

CMD ["/app/axum_admin"]
