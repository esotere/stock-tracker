import React, { Component } from 'react';
import NotesComponent from './NotesComponent';

class NotesContainer extends Component {
  state = {input: ''}

  handleButtonClick = () => {
    this.props.storeNote(this.state.input)
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
      <button onClick={this.handleButtonClick}>Store Note</button>
      </div>
    )
  }
}


export default NotesContainer;
