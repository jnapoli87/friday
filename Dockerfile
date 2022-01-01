FROM node
WORKDIR /app
COPY . /app
RUN npm install && npm cache clean --force
CMD node index.js
EXPOSE 3000