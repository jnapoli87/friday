FROM node:lts-alpine3.12

RUN apk update && apk add ffmpeg && rm -rf /var/cache/apk/*
WORKDIR /app
COPY . /app
USER root
RUN npm install && npm cache clean --force
CMD node index.js
EXPOSE 3000
