'use client'
import { useEffect, useState } from "react";
import queryString from 'query-string'

const configFile = {
  clientId: '397340467648-nlijse84arh54hnulit6i46v8hmj60gm.apps.googleusercontent.com',
  link: 'https://accounts.google.com/o/oauth2/v2/auth'
}

declare let window : Record<string, any>;
declare let google : Record<string, any>;
// declare let chrome : Record<string, unknown>;

export default function Apple() {
  const [authLink, setAuthLink] = useState('')
  useEffect(() => {
    const link = genAuth();
    setAuthLink(link);
    window.addEventListener('message', (event) => {
      // 验证消息来源
      console.log('Received message:', event.data);
    });
  }, []);

  function genAuth(){
    const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
    const params = {
      "origin": location.origin,
      'client_id': configFile.clientId,
      'redirect_uri':  `${location.origin}/callback`,
      'response_type': 'id_token',
      // 'scope': ['https://www.googleapis.com/auth/userinfo.email','https://www.googleapis.com/auth/userinfo.profile'],
      'scope': "openid email profile",
      'nonce':  '21208298071267998750675144691611999301006655472014769051443385150345422400305',
      // 'include_granted_scopes': 'true',
      'prompt': 'select_account',
      "flowName": 'GeneralOAuthFlow'
      // 'state': 'pass-through value'
    };
    return queryString.stringifyUrl({url: oauth2Endpoint, query: {...params}})
  }

  function postmessage(a: string){
    console.log('====postmessage=',a);
  }

  async function handleLinkClick(){
    // await loadGoolge();
    // const originWindowOpen: any = window.open;
    // window.open = function(){
    //   console.log('====',arguments);
    //   const t = originWindowOpen.call(window, ...arguments);
    //   const timer = setInterval(()=>{
    //     if(t?.closed){
    //       console.log('====closed=',t, t.location);
    //       clearInterval(timer);
    //       // chrome.identity.getAuthToken({interactive: true}, function(token) {
    //       //     console.log('===chrome-token==', token);
    //       // })
    //     }
    //   },200);
    // }
    const popupWindow = window.open(authLink, 'popupWindow', 'popup=1,width=600,height=400,scrollbars=yes,resizable=yes')
  }

function handleLoginClick(){

}

  return (
    <div>
      <div className="w-300 flex item-center justify-around">
        <span className="purple" onClick={handleLinkClick}>nav-auth</span>
        <span className="purple" onClick={handleLoginClick}>Has Login</span>
      </div>
      <span id="google111" className="flex"></span>
    </div>
  )
}

//   https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?
//   client_id=794773058108-iokaubrmr1h6217cn9i2la9q2507u0qe.apps.googleusercontent.com&
//   redirect_uri=http%3A%2F%2Flocalhost%3A5190%2Fcallback&
//   response_type=id_token&
//   scope=openid%20email%20profile&
//   nonce=21208298071267998750675144691611999301006655472014769051443385150345422400305&
//   prompt=select_account&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow


async function loadGoolge(){
  await loadJS('google', 'https://accounts.google.com/gsi/client');
  // debugger;
  google.accounts.id.initialize({
    client_id: '397340467648-nlijse84arh54hnulit6i46v8hmj60gm.apps.googleusercontent.com',
    callback: (data: Record<string,any>) => {
      console.log('====xxxx',data);
      // authCallback(data);
    }
  });
  google.accounts.id.renderButton(document.getElementById('google111'), { theme: 'outline', size: 'large' });
}

function loadJS(elementId: string, url:string) {
  return new Promise<void>((resolve, reject) => {
    if (document.getElementById(elementId)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = url;
    script.onload = () => resolve();
    script.onerror = (e) => reject(e);
    document.body.appendChild(script);
  });
}
