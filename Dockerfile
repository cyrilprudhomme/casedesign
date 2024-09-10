FROM node:lts as builder
LABEL authors="cprudhomme@kodwizz.fr"
RUN npm i -g @ionic/cli
RUN npm i -g @angular/cli
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:lts
LABEL authors="cprudhomme@kodwizz.fr"
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY app /usr/src/app
COPY --from=builder /usr/src/app/www /usr/src/app/public
RUN npm run start
