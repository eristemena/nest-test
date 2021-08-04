FROM ubi8/nodejs-14 AS builder

RUN apk update && apk add --no-cache --virtual .build-deps make gcc g++ python

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm build

FROM ubi8/nodejs-14 AS runner

WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules

EXPOSE 3000

CMD ["node", "dist/main"]
