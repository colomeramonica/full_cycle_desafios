# Use uma imagem do Go como base
FROM golang:1.21.3-alpine3.18 AS build

WORKDIR /app

RUN go mod init main

COPY main.go .

RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

FROM scratch

COPY --from=build /app/app /app/app

EXPOSE 8000

CMD ["/app/app"]
