import { IPlugin } from '@maticnetwork/maticjs'
import Resolution from '@unstoppabledomains/resolution'

export class UnstoppableDomainsClientPlugin implements IPlugin {
  setup(matic) {
    matic.utils.UnstoppableDomains = new Resolution()

    console.log('setup matic', matic)
  }
}

export default UnstoppableDomainsClientPlugin
