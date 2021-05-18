import React from 'react';
import './App.css';
import { navbar } from './components/navbar';

export class App extends React.Component{
  render(){
    let nav = new navbar();
  return (
    <div className="App">
      {nav.render()}

    </div>
  );
}
}

