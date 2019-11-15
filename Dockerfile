FROM node:10
RUN mkdir /app
ADD . /app
WORKDIR /app
RUN npm install

EXPOSE 8000
CMD ["node", "server/index.js"]
