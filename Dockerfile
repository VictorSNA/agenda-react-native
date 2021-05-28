FROM node:15.10.0

ARG uid
ARG app_path

ENV PATH `$app_path/node_modules/.bin`:$PATH

COPY package.json $app_path/package.json

WORKDIR $app_path

RUN useradd -u $uid --home-dir $app_path rental-cars

USER agenda
