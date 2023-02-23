FROM node:16-alpine

WORKDIR /node-app/finance-mongo

COPY . ./

EXPOSE 3005

RUN npm install

ENTRYPOINT npm start