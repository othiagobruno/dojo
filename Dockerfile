FROM node:10

WORKDIR /usr/dojo

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3333

CMD ["yarn", "start"]