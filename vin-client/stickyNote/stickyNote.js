
import "./stickyNote.css";
import React, { Component } from "react";
import NoteComponent from "./NoteComponent";

class StickyNote extends Component {
  render(){
    return (
      <div>
        {notes.map(note => (
          <NoteComponent {...notes} />
      </div>
    )
  }
}

const notes = [
 {
   title: '',
   text: '',
   date: '',
   colorClass: ''
 }
]

export default StickyNote;
