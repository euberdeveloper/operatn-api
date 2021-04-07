FROM node:alpine
WORKDIR /server
COPY package.json .
RUN npm install
COPY . .
RUN npm run transpile:source
CMD ["npm", "start"]