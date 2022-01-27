FROM node:14-alpine

ENV MY_VAR=cake

WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
