import {useState} from 'react';
import './App.css'

export default function App() {

  const [token, setToken] = useState('');

  function handleToken(){
    setToken(window.pulseAppWebToken)
  }

  function handleNativeParam(){
    window.Bridge.postMessage('sssss')
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

