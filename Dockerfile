FROM node:lts
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm add pm2 -g --unsafe-perm
RUN npm install
RUN npm run build
CMD [ "pm2-runtime", "process.json" ]

EXPOSE 80


