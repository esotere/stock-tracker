import React from 'react';
import Home from './components/Home';
import MyStock from './components/MyStock';
import Profile from './components/Profile';
import Search from './components/Search';
import Login from './components/Login';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {
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
