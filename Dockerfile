#change node version to your liking
FROM node:18
WORKDIR /app/
COPY ./package.json .
RUN npm install
COPY ./* .
EXPOSE $DOCKER_PORT
