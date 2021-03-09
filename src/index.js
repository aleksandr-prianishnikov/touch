import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import bg from './pages/assets/bg.png'


export const touch_bar = 'https://s3-alpha-sig.figma.com/img/e15e/e928/2031f9a31a58f7f719b5b4d47c3b7360?Expires=1615766400&Signature=fcfU3F7y32YtpGF3TtnSAsALx0ETZKJZFKVc4Cua7rAnKMdfFWyHmYjTmCQq9wj~A6exEWewCaLdQ94jqz9E-PrKG2tSFMqz~isYYOjohWyT-G24J2D16KP6H0mtDt95IPqr17E-q8YeVfqRL~V4IFcUEb5snjIG5vWfW21gOOMTMWEBjoys-a3a0Cv1TXX~I1x4qTQ1fPGYrKsdhZtKSDoR6dGx10G0i5~OihOGP8mYIr8D8YpBTTlD4QF7p7fQijo8f4FOPm5928rXS8aPzLMuIlOfrWDXi4sdxsnZe8Nc3pT1MZlxoyoPixbkzm7rgr68OF2YOMz2katK5aslgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
