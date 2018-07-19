import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NotesContainer from './components/NoteContainer/stickyNote'
import Navbar from './components/Navbar/navbar';


class App extens Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

render() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path = '/ render' = {() => (
            (this.state.loggedIn !== "" ? (
              <Redirect to = "/profile"/>
            ) : (
              <Redirect to = "/login"/>
            )
          )
        )} />
            <Route path="/login" component={Login}/>
            <Route path="/myStock" component={MyStock}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/search" component={Search}/>
            <Route path="/home" component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
      );
    }
  }

  export default App;



  )
}








}
