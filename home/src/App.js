import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import config from 'react-global-configuration';
import configuration from './config';
import Navbar from './components/navbar';
import { home_body } from './components/home-body';
import { mymap } from './components/my-map';
import { ratebeer } from './components/rate-beer';
import { all_comments } from './components/all-comments';
import { finder } from './components/find-beer';

config.set(configuration);

export class App extends React.Component{
  render(){
  return (
    <BrowserRouter >
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" component={ home_body } exact/>
        <Route path="/home" component={ home_body } exact/>
        <Route path="/my-map" component={ mymap } exact/>
        <Route path="/find-beer" component={ finder } exact/>
        <Route path="/rate-beer" component={ ratebeer } exact/>
        <Route path="/all-comments" component={ all_comments } exact/>
      </Switch>

    </div>
    </BrowserRouter>
  );
}
}

