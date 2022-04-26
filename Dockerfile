FROM --platform=linux/amd64 node:14.19.0-alpine3.15

WORKDIR /hardhat-node

COPY package.json .

RUN npm install

COPY hardhat.config.js .
COPY node-support.mjs .
COPY entrypoint.sh .
COPY scripts ./scripts
COPY forking-config.json .

RUN ["chmod", "+x", "/hardhat-node/scripts/prepare-node.sh"]
RUN ["chmod", "+x", "entrypoint.sh"]

ARG chain

RUN node ./scripts/build-env.js ${chain}
RUN ./scripts/prepare-node.sh

EXPOSE 8545
EXPOSE 1545

ENTRYPOINT ["/hardhat-node/entrypoint.sh"]
