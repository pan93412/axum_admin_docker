FROM rust:1.68-bookworm AS builder

WORKDIR /src

# use sparse to speed up the dependencies download process
ENV CARGO_REGISTRIES_CRATES_IO_PROTOCOL=sparse
ARG EXECUTABLE_NAME=axum_admin

RUN apt update \
  && apt install mold

COPY . .

# Build the project to get the executable file
RUN mold -run cargo build --release

RUN mkdir -p /app/bin \
  # move the files to preserve to /app
  && (cat .zeabur-preserve | xargs -I {} cp -r {} /app/{}) \
  # move the binary to the root of the container
  && cp target/release/${EXECUTABLE_NAME} /app/bin

FROM debian:bookworm-slim

ARG EXECUTABLE_NAME=axum_admin

RUN apt-get update \
  && apt-get install -y openssl \
  && rm -rf /var/lib/apt/lists/*

RUN useradd -m -s /bin/bash zeabur
USER zeabur

WORKDIR /app

COPY --from=builder /app/* /app/

CMD ["/app/bin/${EXECUTABLE_NAME}"]
