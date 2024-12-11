import {useCallback, useState} from 'react';
import { http } from 'viem'
import { createBundlerClient } from 'viem/account-abstraction'
import { mainnet } from 'viem/chains'

const bundlerClient = createBundlerClient({
  chain: mainnet,
  transport: http('https://opt-mainnet.g.alchemy.com/v2/6GVHgDqV0Xv_iPE1cA2FPUJFdZhElNrJ')
})
const bundlerClient2 = createBundlerClient({
  chain: mainnet,
  transport: http('https://arb-mainnet.g.alchemy.com/v2/6GVHgDqV0Xv_iPE1cA2FPUJFdZhElNrJ')
})

export default function UserOpHash(){

  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  const [dataArb, setDataArb] = useState({});
  const [errorArb, setErrorArb] = useState(false);

  const handleChange = useCallback(async (event) => {
    setError(false);
    const v = event.target.value;
    const res = await bundlerClient.getUserOperationReceipt({
      hash: v
    }).catch((e)=>{
      console.error('[Error]:',e);
      setError(true)
    })
    console.log('====', res.receipt);
    setData(res.receipt)
  }, []);

  const handleChange2 = useCallback(async (event) => {
    setErrorArb(false);
    const v = event.target.value;
    const res = await bundlerClient2.getUserOperationReceipt({
      hash: v
    }).catch((e)=>{
      console.error('[Error]:',e);
      setErrorArb(true)
    })
    console.log('====', res.receipt);
    setDataArb(res.receipt)
  }, []);

  return <div className="flex items-center justify-center gap-10">
    <div className="w-[800px] h-[300px]">
      <div className="mt-[100px] flex items-center bg-pink-200 gap-10">
        UserOpHash -op:
        <input className="border-y border-x border-sky-500 border-solid  bg-pink-200 w-[700px] bo"
               onChange={handleChange}/>
      </div>

      <div className={error ? 'mt-10 bg-red-200' : 'mt-10'}>
        <div>UserTransaction Hash ID</div>
        <div>{data.transactionHash}</div>
      </div>
    </div>

    <div className="w-[800px] h-[300px]">
      <div className="mt-[100px] flex items-center bg-pink-200 gap-10">
        UserOpHash-arb:
        <input className="border-y border-x border-sky-500 border-solid  bg-pink-200 w-[700px] bo"
               onChange={handleChange2}/>
      </div>

      <div className={errorArb ? 'mt-10 bg-red-200' : 'mt-10'}>
        <div>UserTransaction Hash ID</div>
        <div>{dataArb.transactionHash}</div>
      </div>
    </div>
  </div>
}
