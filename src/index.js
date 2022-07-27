import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import cpoliticas from "./assets/img/cpoliticas.jpg";
import edu from "./assets/img/edu.jpg";
import econo from "./assets/img/econo.jpg";
import ing from  "./assets/img/ing.jpg";
import "./index.css";
import Carousel from './components/Carousel';
import Imagenylogo from './components/Imagenylogo';

const images = [cpoliticas, edu, econo, ing];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Imagenylogo/>
    <Carousel  images={images} autoplay={true} />
    <App/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
