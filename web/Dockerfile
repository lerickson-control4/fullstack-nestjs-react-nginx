FROM node:12

RUN mkdir -p /home/web
WORKDIR /home/web

COPY ./package.json .
RUN yarn

COPY . . 
CMD "yarn start"

EXPOSE 3001
