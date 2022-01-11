FROM node
WORKDIR /app
COPY . /app
USER root
RUN apt-get update 
RUN apt-get -y install ffmpeg
RUN npm install && npm cache clean --force
CMD node index.js
EXPOSE 3000
