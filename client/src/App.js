import React, { Component } from 'react';
import Header from './components/header';
import Home from './components/home';
import PageNotFound from './components/pageNotFound';
import Dashboard from './components/dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <div className="app-body">
              <BrowserRouter>
                  <Switch>
                      <Route exact path='/' component={Home}/>
                      <Route exact path='/home' component={Home}/>
                      <Route exact path='/dashboard' component={Dashboard}/>
                      <Route exact path = "*" component={PageNotFound}/>
                  </Switch>
              </BrowserRouter>
          </div>
      </div>
    );
  }
}


export default App;
