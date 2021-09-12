import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import CardList from "./components/CardList";

const data = [
  {
    name: "HTML CSS", 
    deskripsi:"HTML adalah bahasa markup standar untuk membuat dan menyusun halaman dan aplikasi web", 
    imageSrc: "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png"
  }, 
  {
    name: "CSS", 
    deskripsi:"CSS merupakan salah satu bahasa pemrograman web untuk mengendalikan beberapa komponen dalam sebuah web", 
    imageSrc: "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png"
  }, 
  {
    name: "Javascript", 
    deskripsi:"JavaScript adalah bahasa pemrograman yang digunakan dalam pengembangan website agar lebih dinamis dan interaktif.", 
    imageSrc: "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
