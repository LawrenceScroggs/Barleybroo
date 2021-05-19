import React from 'react';
import './App.css';
import { navbar } from './components/navbar';
import { home_body } from './components/home-body';

export class App extends React.Component{
  render(){
    let nav = new navbar();
    let home = new home_body();
  return (
    <body className="a-body">
    <div className="App" background-color="yellow">
      {nav.render()}
      {home.render()}

    </div>
    </body>
  );
}
}

