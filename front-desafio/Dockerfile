FROM node:14 AS builder
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx
COPY --from=builder /app/dist/* /usr/share/nginx/html/
