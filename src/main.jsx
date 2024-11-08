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
var router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/apple",
        element: <AppleAuth />,
    },
    {
        path: "/google",
        element: <GoogleAuth />,
    },
    {
        path: "/callback",
        element: <AuthResult />,
    },
    {
        path: "/wallet",
        element: <Wallet />,
    },
    {
        path: "/native-params",
        element: <NativeParams />,
    }
], { basename: import.meta.env.BASE_URL });
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>);
