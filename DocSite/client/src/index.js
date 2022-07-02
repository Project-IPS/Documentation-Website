import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/js/dist/dropdown';

import './index.css';
import App from './App';
import About from './components/aboutUs'
import Careers from './components/careers'
import ContactUs from './components/contactUs'
import Login from './components/login'
import Blogs from './components/blogs'
import Documentation from './components/documentation'
import DocumentationAlgorithms from './components/documentation-algorithms'
import DocumentationAndroid from './components/documentation-android'
import DocumentationCpp from './components/documentation-cpp'
import {BrowserRouter, Routes, Route, Router } from 'react-router-dom'
 

const root = ReactDOM.createRoot(
  document.getElementById('root')
  );
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}></Route>
    <Route path="/about" element={<About/>} />
    <Route path="/careers" element={<Careers/>} />
    <Route path="/contactUs" element={<ContactUs/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/blogs" element={<Blogs/>} />
    <Route path="/documentation" element={<Documentation/>} />
    <Route path="/documentation/algorithms" element={<DocumentationAlgorithms/>} />
    <Route path="/documentation/android" element={<DocumentationAndroid/>} />
    <Route path="/documentation/cpp" element={<DocumentationCpp/>} />
    
  </Routes>
  </BrowserRouter>
);




