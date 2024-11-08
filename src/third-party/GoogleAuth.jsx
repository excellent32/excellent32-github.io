var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useEffect, useState } from "react";
import queryString from 'query-string';
var configFile = {
    clientId: '397340467648-nlijse84arh54hnulit6i46v8hmj60gm.apps.googleusercontent.com',
    link: 'https://accounts.google.com/o/oauth2/v2/auth'
};
export default function Apple() {
    var _a = useState(''), authLink = _a[0], setAuthLink = _a[1];
    useEffect(function () {
        var link = genAuth();
        setAuthLink(link);
    }, []);
    function genAuth() {
        var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
        var params = {
            "origin": location.origin,
            'client_id': configFile.clientId,
            'redirect_uri': "".concat(location.origin, "/callback"),
            'response_type': 'id_token',
            // 'scope': ['https://www.googleapis.com/auth/userinfo.email','https://www.googleapis.com/auth/userinfo.profile'],
            'scope': "openid email profile",
            'nonce': '21208298071267998750675144691611999301006655472014769051443385150345422400305',
            // 'include_granted_scopes': 'true',
            'prompt': 'select_account',
            "flowName": 'GeneralOAuthFlow'
            // 'state': 'pass-through value'
        };
        return queryString.stringifyUrl({ url: oauth2Endpoint, query: __assign({}, params) });
    }
    function postmessage(a) {
        console.log('====postmessage=', a);
    }
    function handleLinkClick() {
        return __awaiter(this, void 0, void 0, function () {
            var originWindowOpen;
            return __generator(this, function (_a) {
                originWindowOpen = window.open;
                window.open = function () {
                    console.log('====', arguments);
                    // @ts-ignore
                    var t = originWindowOpen.call.apply(originWindowOpen, __spreadArray([window], arguments, false));
                    var timer = setInterval(function () {
                        if (t === null || t === void 0 ? void 0 : t.closed) {
                            console.log('====closed=', t, t.location);
                            clearInterval(timer);
                            // chrome.identity.getAuthToken({interactive: true}, function(token) {
                            //     console.log('===chrome-token==', token);
                            // })
                        }
                    }, 200);
                    t.postMessage = function (a) {
                        console.log('====postmessage-a=', a);
                    };
                    console.log('====', t);
                };
                window.open(authLink);
                return [2 /*return*/];
            });
        });
    }
    function handleLoginClick() {
        var t = google.auth2.getAuthInstance().isSignedIn.get();
        console.log('======t=', t);
    }
    return (<div>
        <div className="w-300 flex item-center justify-around">
        <span className="purple" onClick={handleLinkClick}>nav-auth</span>
        <span className="purple" onClick={handleLoginClick}>Has Login</span>
        </div>
        <span id="google111" className="flex"></span>
    </div>);
}
//   https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?
//   client_id=794773058108-iokaubrmr1h6217cn9i2la9q2507u0qe.apps.googleusercontent.com&
//   redirect_uri=http%3A%2F%2Flocalhost%3A5190%2Fcallback&
//   response_type=id_token&
//   scope=openid%20email%20profile&
//   nonce=21208298071267998750675144691611999301006655472014769051443385150345422400305&
//   prompt=select_account&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow
function loadGoolge() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadJS('google', 'https://accounts.google.com/gsi/client')];
                case 1:
                    _a.sent();
                    // debugger;
                    google.accounts.id.initialize({
                        client_id: '397340467648-nlijse84arh54hnulit6i46v8hmj60gm.apps.googleusercontent.com',
                        callback: function (data) {
                            console.log('====xxxx', data);
                            // authCallback(data);
                        }
                    });
                    google.accounts.id.renderButton(document.getElementById('google111'), { theme: 'outline', size: 'large' });
                    return [2 /*return*/];
            }
        });
    });
}
function loadJS(elementId, url) {
    return new Promise(function (resolve, reject) {
        if (document.getElementById(elementId)) {
            resolve();
            return;
        }
        var script = document.createElement('script');
        script.async = true;
        script.src = url;
        script.onload = function () { return resolve(); };
        script.onerror = function (e) { return reject(e); };
        document.body.appendChild(script);
    });
}
