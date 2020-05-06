FROM node:12

RUN mkdir -p /home/api
WORKDIR /home/api

COPY ./package.json .
RUN yarn

COPY . . 
CMD ./node_modules/.bin/nest start --watch

EXPOSE 3000
