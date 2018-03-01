FROM node:latest as build-env
ADD . /app
WORKDIR /app

FROM grc.io/distroless/nodejs
COPY --from=build-env /app /app
WORKDIR /app
CMD ["main.js"]
