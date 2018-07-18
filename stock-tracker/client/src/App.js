import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NotesContainer from './components/NoteContainer/stickyNote'
import Navbar from './components/Navbar/navbar';

class App extends Component {
  state = {
    notes: []
  }

  storeNote = note => {
    this.setState({notes: [
      ...this.state.notes, {text: note}
    ]})
  }

  deleteNote = id => {
    // find the note matching the id in this.state.notes
    // delete the note
    // store the array without that note
  }

  render() {
    return (
      <div className="App">
      <h1>Hi I am a React App </h1>
      <p> This really works </p>
      <NotesContainer
        notes={this.state.notes}
        storeNote={this.storeNote}
        deleteNote={this.deleteNote}
      />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React)
  }
}

export default App;
