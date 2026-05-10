FROM node:24-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable && corepack prepare pnpm@10.0.0 --activate

RUN pnpm install

COPY . .

CMD ["pnpm", "dev"]
