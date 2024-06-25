import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reactDOM from 'react-dom';
import First from './First';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Student from './Student';
import Cars from './Cars.js';
// import Book from './Book.js';
// import Address from './Address.js';
reactDOM.render( <First/>, document.getElementById("first"));
var name = "basant";
var age = 22;
var cast = "Chaudhary"
// reactDOM.render(<Address/>, document.getElementById("adb"))
// reactDOM.render(<Book/>, document.getElementById("books"))
reactDOM.render(<Student nm = {name} ag = {age} cs = {cast} />, document.getElementById("stud"));
reactDOM.render(<Cars/>, document.getElementById("car") );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
