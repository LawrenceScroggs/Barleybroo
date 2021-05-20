import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { navbar } from './components/navbar';
import { home_body } from './components/home-body';
import { signin } from './components/sign-in';

export class App extends React.Component{
  render(){
    let nav = new navbar();
  return (
    <BrowserRouter>
    <body className="App">
      {nav.render()}
      <Switch>
        <Route path="/" component={ home_body } exact/>
        <Route path="/home" component={ home_body } exact/>
        <Route path="/sign-in" component={ signin } exact/>
      </Switch>

    </body>
    </BrowserRouter>
  );
}
}

