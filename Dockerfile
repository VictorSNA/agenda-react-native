FROM node:15

WORKDIR /agendarn

ENV PATH `/agendarn/node_modules/.bin`:$PATH

COPY package.json /agendarn/package.json
RUN npm install --legacy-peer-deps
RUN npm install --global --legacy-peer-deps expo-cli
RUN useradd -u $uid --home-dir $app_path rental-cars
