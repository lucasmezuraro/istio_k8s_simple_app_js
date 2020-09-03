FROM node:alpine
WORKDIR /work/app
COPY . ./
COPY package*.json ./
EXPOSE 3001
RUN npm install
CMD ["npm", "start"]