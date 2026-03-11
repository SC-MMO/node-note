FROM node:24-alpine

WORKDIR /apps/frontend

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . /frontend

CMD ["pnpm", "run", "dev"]
