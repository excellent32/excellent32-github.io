import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import AppleAuth from './third-party/AppleAuth';
import GoogleAuth from './third-party/GoogleAuth';
import AuthResult from './third-party/AuthResult';
import NativeParams from './native-params';
import Wallet from './wallet/Wallet';
import './index.css';
var baseUrl = import.meta.env.BASE_URL;
var router = createBrowserRouter([
    {
        path: baseUrl + "/",
        element: <App />,
    },
    {
        path: baseUrl + "/apple",
        element: <AppleAuth />,
    },
    {
        path: baseUrl + "/google",
        element: <GoogleAuth />,
    },
    {
        path: baseUrl + "/callback",
        element: <AuthResult />,
    },
    {
        path: baseUrl + "/wallet",
        element: <Wallet />,
    },
    {
        path: baseUrl + "/native-params",
        element: <NativeParams />,
    }
]);
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>);
