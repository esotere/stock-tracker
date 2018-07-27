import React, {Component} from 'react';
import axios from 'axios';
import Home from './components/Home';
import MyStock from './components/MyStock';
import Profile from './components/Profile';
import Search from './components/Search';
import Login from './components/Home/Login';
import Authentication from './components/Authentication';
import Signup from './components/Authentication/Sign_up';
import Navbar from './components/Navbar';
import { BrowserRouter, Route,  Switch, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: ''
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">

        <BrowserRouter>
        <div>
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>Join the party, {this.state.username}!</p>
        }

  <Switch>
        <Route
          exact path="/"
          component={Home} />
        <Route
          path="/login"
          render={(props) =>
            <Login
              updateUser={this.updateUser}
              {...props}
            />}
        />
        <Route
          path="/profile"
          render={(props) =>
            <Profile
            name={this.state.username}
            {...props}/>}
        />

        <Route
          path="/search"
          render={(props) =>
            <Search/>}
        />

        <Route
          path="/mystocks"
          render={(props) =>
            <MyStock/>}
        />

      </Switch>
      </div>
    </BrowserRouter>



      </div>
    );
  }
}

export default App;




// <Route exact path="/" component={Home}/>
// <Route path="/login" component={Login}/>
// // <Route path="/search" component={Search}/>
// <Route path="/myStock" component={MyStock}/>
