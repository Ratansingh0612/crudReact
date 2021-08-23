 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";







ReactDOM.render(<App />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
//<Route path="/" component={Home} exact/>
//<Route path="/all-course" component={Allcourse} exact/>
//<Route path="/Add-form" component={Addform} exact/>
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 