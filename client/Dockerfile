FROM node:alpine

# SPECIAL LINE TO MAKE CREATE-REACT-APP TO WORK WITH KUBERNETES
ENV CI=true

WORKDIR /app

COPY package.json ./
RUN yarn install
COPY ./ ./

CMD ["yarn", "start"]
