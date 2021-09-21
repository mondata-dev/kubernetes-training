FROM node:14-slim

RUN mkdir -p /app/storage
WORKDIR /app

EXPOSE 8080

COPY server.js .

CMD node server.js
