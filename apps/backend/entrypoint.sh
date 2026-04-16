#!/bin/sh

echo "🔄 Waiting for database..."

until pg_isready -h db -p 5432 -U postgres >/dev/null 2>&1; do
  echo "⏳ DB not ready yet..."
  sleep 2
done

echo "✅ Database is ready"

# now run prisma logic
if [ -d "prisma/migrations" ] && [ "$(ls -A prisma/migrations)" ]; then
  echo "📦 Applying migrations..."
  npx prisma migrate deploy
else
  echo "⚠️ No migrations found, using db push..."
  npx prisma db push
fi

echo "🚀 Starting app..."
exec pnpm run dev
