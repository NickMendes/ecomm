FROM node:16-alpine

WORKDIR /node-app/finance

COPY . ./

EXPOSE 3003

RUN npm install

ENTRYPOINT npm start