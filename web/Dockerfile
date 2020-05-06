FROM node:12

RUN mkdir -p /home/web
WORKDIR /home/web

# COPY ./.rescriptsrc.js .
# COPY ./.npmrc .
# COPY ./package.json .

COPY . . 
RUN "yarn"

CMD ["./node_modules/.bin/react-scripts", "start"]

EXPOSE 3001
