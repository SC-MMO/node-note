FROM node:24-alpine

WORKDIR /app

# install pnpm
RUN npm install -g pnpm

# copy only backend deps first (better caching)
COPY package.json pnpm-lock.yaml ./

# install deps
RUN pnpm install

# copy rest of backend
COPY . .

# generate prisma client at build time (IMPORTANT)
RUN npx prisma generate

CMD ["pnpm", "run", "dev"]
