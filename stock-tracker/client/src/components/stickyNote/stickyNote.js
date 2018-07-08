import React from"react";
import "./stickyNote.css";


const notes = [
 {
   title: '',
   text: '',
   date: '',
   colorClass: ''
 }
]

const NotesContainer = props => {
 const notes = props.notes;
 return (
   <div>
     {notes.map(note => (
       <NoteComponent {...notes} />
     ))}
   </div>
 )
}

const NoteComponent = props => {
 const title = props.title
 const text = props.text
 return (
   <li>{text}</li>
 )
}
