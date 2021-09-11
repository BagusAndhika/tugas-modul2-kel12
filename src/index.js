import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import CardList from "./components/CardList";
import Gambar from "./assets/images/amd.jpg"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList 
      name="Bagus" 
      nim="21120118120003" 
      kelompok="12" 
      isNameBold
      image={Gambar}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
