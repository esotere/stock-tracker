import React, { Component } from 'react';

const NotesComponent = (props) => {
  const title = props.title;
  const text = props.text;
  const date = props.date
  return (
    <ul>
    {[<li>{text}</li>, <li>{title}</li>, <li>{date}</li>]}
    </ul>
  )
}
export default NotesComponent;
