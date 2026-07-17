FROM node:22-alpine AS deps

WORKDIR /app

COPY package.json ./
COPY package-lock.json* ./
COPY pnpm-lock.yaml* ./
COPY yarn.lock* ./

RUN if [ -f package-lock.json ]; then \
      npm ci; \
    elif [ -f pnpm-lock.yaml ]; then \
      corepack enable && pnpm install --frozen-lockfile; \
    elif [ -f yarn.lock ]; then \
      corepack enable && yarn install --frozen-lockfile; \
    else \
      npm install; \
    fi


FROM node:22-alpine AS builder

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN if [ -f package-lock.json ]; then \
      npm run build; \
    elif [ -f pnpm-lock.yaml ]; then \
      corepack enable && pnpm build; \
    elif [ -f yarn.lock ]; then \
      corepack enable && yarn build; \
    else \
      npm run build; \
    fi


FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]