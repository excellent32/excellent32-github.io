import { useState } from 'react';
export default function App() {
    var _a = useState(''), token = _a[0], setToken = _a[1];
    function handleToken() {
        if (typeof window === 'object') {
            setToken(window === null || window === void 0 ? void 0 : window.pulseAppWebToken);
        }
    }
    function handleNativeParam() {
        if (typeof window === 'object') {
            window === null || window === void 0 ? void 0 : window.Bridge.postMessage('sssss');
        }
    }
    return (<div>
      测试 wallet-connect

      <div style={{ padding: 20 }}>
        <button onClick={handleToken}>获取Token</button>
        <span>{token}</span>
      </div>

      <button onClick={handleNativeParam}>native 参数</button>
    </div>);
}
