FROM node:22-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG PUBLIC_API_URL
ENV PUBLIC_API_URL=$PUBLIC_API_URL

ENV HOST=0.0.0.0
ENV PORT=4321

RUN npm run build

EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]