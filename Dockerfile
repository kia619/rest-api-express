FROM node:latest

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 5000
CMD [ "npm", "start" ]
