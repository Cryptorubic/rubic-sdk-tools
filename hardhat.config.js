require('dotenv').config();

const { RPC_URL, BLOCK_NUMBER, CHAIN_ID } = process.env;

module.exports = {
  networks: {
    hardhat: {
      forking: {
        url: RPC_URL,
        blockNumber: Number(BLOCK_NUMBER)
      },
      chainId: Number(CHAIN_ID)
    }
  }
};
