import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Stock from "./components/stock/Stock.js"
import Stock2 from "./components/stock/stock2.js"
import Stock3 from "./components/stock/stock3.js"
import API from './utils/API';
import axios from 'axios';




class App extends Component {
  componentWillMount() {
    console.log('><><')
    
   
    API.RandomStock()
      .then(data => {
        if (!data.data || !data.data['Meta Data']) {
          return;
        }

        const newStock = {
          symbol: data.data['Meta Data'].Symbol
        }

        this.setState({
          stock: [...this.state.stock, newStock]
        })
      })
      
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Stock-Tracker</h1>
        </header>
        { <p className="App-intro">
          Hey Team-React! We have lift off.
        </p> }
         {/* <Stock3/>
        <Stock2 /> */}
        <Stock /> 
      </div>
    );
  }
}

export default App;
