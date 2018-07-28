import React, { Component } from 'react';
import InputSearch from './InputSearch';
import { BrowserRouter, Route,  Switch, Link } from "react-router-dom";

const InputField = (props) => {
  const text = props.text;
  return (
    <ul>
    <li>{text}</li>
    </ul>
  )
}
 export default InputField;
