FROM rust:1.68-bookworm AS builder

WORKDIR /src

# use sparse to speed up the dependencies download process
ENV CARGO_REGISTRIES_CRATES_IO_PROTOCOL=sparse

# the target to compile; musl is for alpine
# change to aarch64 if target is aarch64
ENV CARGO_BUILD_TARGET=aarch64-unknown-linux-gnu

# hack: find binary path
# fixme: it is platform-specific hack!
ENV CARGO_TARGET_X86_64_UNKNOWN_LINUX_GNU_RUNNER=echo
ENV CARGO_TARGET_AARCH64_UNKNOWN_LINUX_GNU_RUNNER=echo

RUN apt update \
        && apt install mold \
        && rustup target add $CARGO_BUILD_TARGET

COPY . .
RUN mold -run cargo build

# move the binary to the root of the container
RUN mkdir /app && mv $(cargo run) /app/server

FROM debian:bookworm-slim

RUN apt-get update \
        && apt-get install -y openssl \
        && rm -rf /var/lib/apt/lists/*

RUN useradd -m -s /bin/bash zeabur
USER zeabur

WORKDIR /app
COPY --from=builder /app/* /app/

CMD ["/app/server"]
