
import React from"react";
import "./stickyNote.css";
import React, { Component } from "react";


const NoteComponent = props => {
 const title = props.title
 const text = props.text
 return (
   <li>{text}</li>
 )
}

export default NoteComponent;
