import { useEffect, useState } from "react";

export default function AuthResult() {

  document.addEventListener('AppleIDSignInOnSuccess', (event: Record<string,any>) => {
    // Handle successful response.
    console.log(event.detail.data);
});


// Listen for authorization failures.
document.addEventListener('AppleIDSignInOnFailure', (event: Record<string,any>) => {
     // Handle error.
     console.log(event.detail.error);
});

function handleChromeClick(){
  const hashParams = new URLSearchParams(location.hash.substr(1))
  const id_token = hashParams.get('id_token');
    var xhr = new XMLHttpRequest();
    xhr.open('GET',
        'https://www.googleapis.com/drive/v3/about?fields=user&' +
        'access_token=' + id_token);
    xhr.onreadystatechange = function (e) {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.response);
      } else if (xhr.readyState === 4 && xhr.status === 401) {
        // Token invalid, so prompt for user permission.
        console.error('没有登陆');
      }
    };
    xhr.send(null);
}
  return (
    <div>
        <div onClick={handleChromeClick}>Google has Login</div>
    </div>
  )
}
