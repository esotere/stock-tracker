import React from 'react';
import Home from './components/Home';
import MyStock from './components/MyStock';
import Profile from './components/Profile';
import Search from './components/Search';
import Login from './components/Home/Login';
import { BrowserRouter, Route,  Switch, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <nav>
              <Link to="/">Home</Link> |
              <Link to="/profile">Profile</Link> |
              <Link to="/search">Search</Link> |
              <Link to="/myStock">MyStock</Link>
            </nav>
            <Switch>

              <Route path="/profile" component={Profile}/>
              <Route path ="/search" component={Search} />

            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}


export default App;

// <Route exact path="/" component={Home}/>
// <Route path="/login" component={Login}/>
// // <Route path="/search" component={Search}/>
// <Route path="/myStock" component={MyStock}/>
