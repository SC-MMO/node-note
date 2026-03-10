FROM node:24-alpine

WORKDIR /apps/backend/

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

CMD ["pnpm", "run", "dev"]
