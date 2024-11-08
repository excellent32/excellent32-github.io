import {useEffect, useState} from 'react';
import { createConfig, fallback, http, connect } from '@wagmi/core'
import * as supportChains from '@wagmi/core/chains';
import  type {Chain} from '@wagmi/core/chains';
import { walletConnect } from '@wagmi/connectors'

const transport = fallback([http()]);
const res : Record<string, any> = Object.keys(supportChains).reduce(
  (r, c) => {
    // @ts-ignore
    const chain = supportChains[c] as any;
    // @ts-ignore
    r.chains.push(chain);
    r.transports[chain.id] = transport;
    return r;
  },
  {
    chains: [],
    transports: {} as any
  }
);

const connector = walletConnect({
  projectId: 'ced3fd59c00844656725ca216e86b7bb',
});
// @ts-ignore
const connectConfig = createConfig({
  chains: res.chains as [Chain, ...Chain[]],
  transports: res.transports
});

export default function App() {
  const [con, setCon] = useState<number>();

  useEffect( ()=> {
    initConnect();
  })

  async function initConnect(){
    const result = await connect(connectConfig, {connector});
    setCon(result.chainId)
  }


  return (
    <div>
      测试 wallet-connect
      <span>{con}</span>
    </div>
  )
}

