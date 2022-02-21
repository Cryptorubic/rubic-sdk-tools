FROM node:16.14.0-alpine3.15

WORKDIR /eth-node

COPY package.json .

RUN npm install

COPY scripts ./scripts
COPY forking-config.json .
COPY hardhat.config.js .
RUN ["chmod", "+x", "/eth-node/scripts/prepare-node.sh"]

ARG chain

RUN node ./scripts/build-env.js ${chain}
RUN ./scripts/prepare-node.sh

EXPOSE 8545

CMD ["npx", "hardhat", "node"]
