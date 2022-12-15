FROM node:bullseye-slim

WORKDIR /app

RUN npx kill-port 80

RUN chmod -R 777 .

COPY nodeapp/package.json .

RUN npm install --unsafe-perm 

RUN npm config set unsafe-perm true

COPY . .

EXPOSE 5000

WORKDIR /app/nodeapp

ENTRYPOINT ["npm", "start"]