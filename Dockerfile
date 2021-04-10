FROM node:lts-alpine
WORKDIR /server
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run prisma:client && \
    npm run transpile:source && \
    rm -r source
CMD ["npm", "start"]