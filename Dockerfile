FROM node:lts-alpine3.14

RUN mkdir -p /usr/share/nuxt-app
WORKDIR /usr/share/nuxt-app

RUN apk update && apk upgrade
RUN apk add git 

COPY . /usr/share/nuxt-app

RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]

