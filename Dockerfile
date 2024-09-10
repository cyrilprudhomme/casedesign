FROM node:lts as builder
LABEL authors="cprudhomme@kodwizz.fr"
RUN npm i -g @ionic/cli
RUN npm i -g @angular/cli
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:lts-alpine
LABEL authors="cprudhomme@kodwizz.fr"
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent
COPY app /usr/src/app
COPY --from=builder /usr/src/app/www /usr/src/app/public
COPY www /usr/src/app/public
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["node", "./bin/www"]
