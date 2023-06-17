FROM node:19-bullseye-slim
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3003
CMD ["npm", "start"]