# rubic-sdk-tools

### Description
Docker images for sdk unit-tests.

### Get started
1. Create file `forking-config.json`
2. Add chains configuration:
```json
{
  "eth": {
    "rpcUrl": <rpc string>,
    "blockNumber": <number>,
    "chainId": 1
  },
  "bsc": {
    "rpcUrl": <rpc string>,
    "blockNumber": <number>,
    "chainId": 56
  },
  ...
}

```
3. Build container ` docker build . --build-arg chain=<chain key> --progress=plain` where <chain key> is a key from forking-config.json 
