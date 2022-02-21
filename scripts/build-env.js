const fs = require('fs');

const chain = process.argv[2];
const forkingConfig = JSON.parse(fs.readFileSync('./forking-config.json').toString());

if (!forkingConfig[chain]) {
    throw new Error(`'${chain}' key not found into forking-config.json`);
}

const envContent =
`RPC_URL=${forkingConfig[chain].rpcUrl}
BLOCK_NUMBER=${forkingConfig[chain].blockNumber}
CHAIN_ID=${forkingConfig[chain].chainId}`;

fs.writeFileSync('./.env', envContent);
