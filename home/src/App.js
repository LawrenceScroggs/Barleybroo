import React from 'react';
import './App.css';
import { navbar } from './components/navbar';

export class App extends React.Component{
  render(){
  return (
    <div className="App">
      <h1>
        <navbar></navbar>
      </h1>
      <h1>hello</h1>

    </div>
  );
}
}

