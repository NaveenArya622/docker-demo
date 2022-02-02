FROM node:lts-alpine
WORKDIR /
COPY / ..
RUN npm install --only=production
RUN npm run build
CMD 'npm' 'start'
