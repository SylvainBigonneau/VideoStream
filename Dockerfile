FROM node:9.11.1

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.4 -g --silent

# start app
CMD ["npm", "start"]
