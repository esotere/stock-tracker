import React from 'react';
import Home from './Home';
import MyStock from './MyStock';
import Profile from './Profile';
import Search from './Search';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

  render() {
    return (
      <BrowserRouter>
        <div>

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/search" component={Search}/>
            <Route path="/myStock" component={MyStock}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
