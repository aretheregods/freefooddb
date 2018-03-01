FROM golang:1 as build-env

WORKDIR /go/src/app
COPY . /go/src/app

RUN go get -d -v ./...
RUN go install -v ./...

FROM alpine
COPY --from=build-env /go/bin/app /
CMD ["/app"]
