FROM rust:1.68-bookworm AS builder

WORKDIR /src

# use sparse to speed up the dependencies download process
ENV CARGO_REGISTRIES_CRATES_IO_PROTOCOL=sparse

RUN apt update \
  && apt install mold

COPY . .

# Build the project to get the executable file
RUN mold -run cargo build --release

RUN mkdir -p /app/bin \
  # move the files to preserve to /app
  && (cat .zeabur-preserve | xargs -I {} cp -r {} /app/{}) \
  # move the binary to the root of the container
  && (cp target/release/* /app/bin || true)

FROM debian:bookworm-slim

ARG EXECUTABLE_NAME=axum-admin

RUN apt-get update \
  && apt-get install -y openssl \
  && rm -rf /var/lib/apt/lists/*

RUN useradd -m -s /bin/bash zeabur
USER zeabur

COPY --from=builder /app /app

WORKDIR /app
CMD ["/app/bin/axum-admin"]
