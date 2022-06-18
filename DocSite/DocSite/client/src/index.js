import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/js/dist/dropdown';
import $ from 'jquery';
import Popper from 'popper.js';
import './index.css';
import App from './App';
import {Route, Router } from 'react-router-dom'
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>


);

// const routing =(
//   <Router>
//     <React.StrictMode>
      
//       <Route path="/" component={App} />
//     </React.StrictMode>
//   </Router>
// );
// ReactDOM.render(routing, document.getElementById('root'));


