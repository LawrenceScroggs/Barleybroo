import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { navbar } from './components/navbar';
import { home_body } from './components/home-body';
import { mymap } from './components/my-map';
import { rate_beer } from './components/rate-beer';

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
        <Route path="/my-map" component={ mymap } exact/>
        <Route path="/rate-beer" component={ rate_beer } exact/>
      </Switch>

    </body>
    </BrowserRouter>
  );
}
}

