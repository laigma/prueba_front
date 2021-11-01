# build stage
FROM node:10.19.0-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install fibers@5.0.0 --ignore-scripts
RUN npm install
COPY . .
# # RUN rm -r /app/dist
RUN npm run build

# production stage
FROM nginx:1.13.12-alpine as production-stage
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]