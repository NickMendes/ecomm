FROM node:16-alpine

WORKDIR /node-app/order

COPY . ./

EXPOSE 3004

RUN npm install

ENTRYPOINT npm start