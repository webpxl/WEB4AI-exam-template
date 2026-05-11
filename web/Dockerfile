FROM node:20-alpine

WORKDIR /web

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4242

CMD ["npm", "run", "dev"]
