FROM alpine:3.16

ENV NODE_VERSION 18.7.0

WORKDIR /code

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

RUN npm run ts-build

CMD ["node", "/dist/index.js"]