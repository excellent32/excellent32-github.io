import {useState} from 'react';
declare const window: any

export default function App() {

  const [token, setToken] = useState('');

  function handleToken(){
    if(typeof window === 'object'){
      setToken(window?.pulseAppWebToken)
    }
  }

  function handleNativeParam(){
    if(typeof window === 'object') {
      window?.Bridge.postMessage('sssss')
    }
  }

  return (
    <div>
      测试 wallet-connect

      <div style={{padding: 20}}>
        <button onClick={handleToken}>获取Token</button>
        <span>{token}</span>
      </div>

      <button onClick={handleNativeParam}>native 参数</button>
    </div>
  )
}

