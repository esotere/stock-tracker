import React from"react";
import "./stickyNote.css";
import React, { Component } from "react";


const notes = [
 {
   title: '',
   text: '',
   date: '',
   colorClass: ''
 }
]

export const NotesContainer = props => {
 const notes = props.notes;
 return (
   <div>
     {notes.map(note => (
       <NoteComponent {...notes} />
     ))}
   </div>
 )
}
