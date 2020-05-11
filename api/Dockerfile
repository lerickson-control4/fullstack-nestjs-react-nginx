FROM node:12

RUN mkdir -p /home/api
WORKDIR /home/api

COPY ./package.json .
RUN yarn

COPY . . 
CMD "yarn start:debug"

EXPOSE 3000
