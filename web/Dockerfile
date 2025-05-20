FROM node:lts-alpine

WORKDIR /web

COPY  ./package.json .

# install project dependencies
RUN npm install

EXPOSE 4242
CMD [ "npm", "run", "dev"]