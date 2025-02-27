# 第一阶段：构建专用
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --frozen-lockfile
COPY . .  
RUN npm run build

# 第二阶段：生产运行
FROM node:18-alpine

WORKDIR /app
ENV NODE_ENV production

# 精确复制必要文件（避免冗余）
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]