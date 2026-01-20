FROM node:24-alpine

# Necessário para compatibilidade de extensões do VS Code no Alpine
RUN apk add --no-cache libc6-compat git

WORKDIR /app

# Garante que a pasta pertença ao usuário node antes de copiar os arquivos
RUN chown -R node:node /app

USER node

COPY --chown=node:node package*.json yarn.lock ./
COPY --chown=node:node tsconfig*.json ./

RUN yarn install

COPY --chown=node:node . .

EXPOSE 5173

CMD ["yarn", "dev"]
