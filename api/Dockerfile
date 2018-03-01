FROM golang:1 as build-env

WORKDIR /go/src/app
COPY . /go/src/app

RUN go get -d -v ./...
RUN go install -v ./...

FROM gcr.io/distroless/base
COPY --from=build-env /go/bin/app /
CMD ["/app"]

EXPOSE 50051
