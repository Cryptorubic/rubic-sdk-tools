import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const jsonParser = bodyParser.json();
const { RPC_URL, BLOCK_NUMBER } = process.env;

const app = express();
app.use(jsonParser);

app.post('/', async (req, res) => {
    const blockNumber = req.body.blockNumber || BLOCK_NUMBER;
    const nodeUrl = 'http://0.0.0.0:8545';
    await axios.post(nodeUrl, {
        jsonrpc: "2.0",
        method: "hardhat_reset",
        params: [{
            forking: {
                jsonRpcUrl: RPC_URL,
                blockNumber: Number(blockNumber)
            },
        }],
        id: Date.now()
    });

    res.send();
});

app.listen(1545, '0.0.0.0');
