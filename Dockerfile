FROM node:10
WORKDIR /usr/src/app
ADD . /app
WORKDIR /app
RUN npm install

EXPOSE 8000
CMD ["npm run", "build-dev"]
