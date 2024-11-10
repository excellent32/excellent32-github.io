'use client'
import {useEffect} from "react";

const configFile = {
  link: 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js',
}

declare let AppleID : Record<string, any>;

export default function Page() {

  useEffect(() => {
    setTimeout(()=>{
      startAuth();
    },1000)
  }, []);


  const handleAuthClick = async ()=>{
    // 添加appleid.auth.js
    // 调用AppleID.auth.init
    try {
      const data = await AppleID.auth.signIn();
      console.log('===apple-data=', data);
    } catch (error) {
      console.error('===apple-data=', error);
    }
  }

  async function startAuth(){
    await loadAppleAuthScript();

    AppleID.auth.init({
      // response_type: 'code',
      clientId: 'service.pulse.social',
      scope: 'openid',
      redirectURI: 'https://dev12.pulse.social:8080/callback',
      // state: 'initial',
      nonce: '21208298071267998750675144691611999301006655472014769051443385150345422400305',
      // usePopup : true
    });
  }

  function handleLoginClick(){

  }

  return (
    <div>
      <button onClick={handleAuthClick}>Apple-Auth</button>
      <button onClick={handleLoginClick}>Has Login</button>
    </div>
  )
}

function loadAppleAuthScript(){
  return new Promise((resovle, reject)=>{
    const script = document.createElement('script');
    script.setAttribute('src', configFile.link);
    script.onload = function(){
      resovle('');
    }
    script.onerror = function(){
      reject('');
    }

    document.head?.append(script);
  })
}
