FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY dist ./dist
COPY package*.json ./
COPY .env.production .env.production

RUN npm install --omit=dev

EXPOSE 8080

# Ejecuta el server en entorno "production"
CMD ["node", "dist/index.js"]
