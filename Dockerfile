# ==============================================================================
# Full-Stack Dockerfile for YourTech Solutions (Frontend + Backend in One Container)
# ==============================================================================

# --- Stage 1: Build Frontend & Backend ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./
COPY tsconfig.json ./
COPY tailwind.config.js ./
COPY postcss.config.js ./
COPY vite.config.ts ./
COPY index.html ./
COPY server/tsconfig.json ./server/

# Install all dependencies for build
RUN npm ci

# Copy source trees
COPY src ./src
COPY server ./server

# Build both Frontend and Backend
RUN npm run build

# --- Stage 2: Production Container ---
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5000

# Install curl for container healthcheck
RUN apk add --no-cache curl

# Copy manifests and install only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Copy built frontend dist and backend dist
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server/dist ./server/dist
COPY --from=builder /app/server/prisma ./server/prisma

# Ensure data directory for persistence with non-root ownership
RUN mkdir -p /app/server/data && chown -R node:node /app

USER node

EXPOSE 5000

# Health check endpoint
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:5000/api/health || exit 1

CMD ["node", "server/dist/index.js"]
