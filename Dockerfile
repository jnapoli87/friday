FROM node
WORKDIR /app
COPY . /app
USER root
RUN apt-get update
RUN apt-get install libasound2-dev
USER 1001
RUN npm install && npm cache clean --force
CMD node index.js
EXPOSE 3000
