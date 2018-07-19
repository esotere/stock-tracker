import React, { Component } from 'react';


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
    // this.setState({notes: [ ...this.state.notes, {text: note}
    // ]}) // find the note matching the id in this.state.notes
    // delete the note
    // store the array without that note
  }


export default App;


render() {
  return (
    <div className="App">
    <h1>Hi I am a React App </h1>
    <p> Notes to Remember </p>
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
