FROM node:6.11.5

WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install

CMD [ "npm", "start" ]

EXPOSE 5000
