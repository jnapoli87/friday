FROM node:lts-alpine3.15

RUN apk update && apk add ffmpeg && apk add python3 && rm -rf /var/cache/apk/*
WORKDIR /app
COPY . /app
USER root
RUN npm install && npm cache clean --force
CMD node index.js
EXPOSE 3000
