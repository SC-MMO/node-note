FROM node:24-alpine

WORKDIR /apps/backend

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

# ✅ Use pnpm (correct)
RUN pnpm prisma generate

EXPOSE 3000

# ✅ separate commands with &&
CMD sh -c "pnpm prisma migrate deploy && pnpm prisma generate && pnpm run dev"
