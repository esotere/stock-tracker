import React, { Component } from 'react';
import NotesComponent from './NotesComponent';

class NotesContainer extends Component {
  state = {input: ''}

  handleButtonClick = (e) => {
    this.props.storeNote(this.state.input)
    this.state.input = "";

  }

  render() {
    const {notes} = this.props;
    return (
      <div>
      {notes.map(note => <p>{note.text}</p>)}
      <input type='text'
        value={this.state.input}
        onChange={evt => this.setState({input: evt.target.value})}
      />
      <button onClick={this.handleButtonClick}>Enter</button>
      </div>
    )
  }
}


export default NotesContainer;

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
}
}


export default App;
