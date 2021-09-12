import React, { Component } from 'react';
import Info from './components/info';

export default class App extends Component {
  render() {
    const pemilik = [
      {
        name: 'Bagus Andhika',
        nomor: '089xxxxxxxx',
        email: 'bagusandhika01@gmail.com',
      },
      {
        name: 'Milleano',
        nomor: '088xxxxxxxx',
        email: 'adisantiko10@gmail.com',
      },
    ];

    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <br></br>
          <br></br>
          <h1 className="font-bold text-3xl">Kelompok 12 Praktikum RPLBK</h1>
          <div className="">
            {pemilik.map((test) => {
              return <Info name={test.name} nomor={test.nomor} email={test.email} />;
            })}
          </div>
        </div>
        <footer />
      </div>
    );
  }
}

