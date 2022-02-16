# maticjs-resolution

[Unstoppable Domains Resolution](https://github.com/unstoppabledomains/resolution) plugin for matic.js

# Installation

```
npm i @unstoppabledomains/maticjs-resolution
```

# Sample

```ts
const { POSClient, use } = require('@maticnetwork/maticjs')
const { Web3ClientPlugin } = require('@maticnetwork/maticjs-web3')
const {
  UnstoppableDomainsClientPlugin
} = require('maticjs-unstoppable-domains')

use(Web3ClientPlugin)
use(UnstoppableDomainsClientPlugin)

const getPOSClient = (network = 'testnet', version = 'mumbai') => {
  const posClient = new POSClient()
  return posClient.init({
    log: true,
    network: network,
    version: version,
    child: {
      provider: new HDWalletProvider(privateKey, config.child.rpc),
      defaultConfig: {
        from: userAddress
      }
    },
    parent: {
      provider: new HDWalletProvider(privateKey, config.parent.rpc),
      defaultConfig: {
        from: userAddress
      }
    }
  })
}

async function showUnstoppableAddress() {
  const client = await getPOSClient()

  const addr = client.client.unstoppableDomains.addr('brad.crypto', 'ETH')

  console.log('Resolves Unstoppable Domains address', await addr)
}

showUnstoppableAddress();
```
