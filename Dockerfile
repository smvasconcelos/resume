FROM node:24-alpine

WORKDIR /app

COPY package*.json yarn.lock ./
COPY tsconfig*.json ./

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]
