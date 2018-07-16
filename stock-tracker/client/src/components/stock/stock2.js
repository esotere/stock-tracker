import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import API from "../../utils/iexAPI";
import axios from "axios"
import parser from 'html-react-parser';
// import { render } from 'react-dom';


class Stock2 extends Component {
    constructor(props){
      super(props)
      this.state = {
        stocks:[
          {"ID":"1", "stock":"AAPL", "price": "$785.34",
           "industry":"Tech"},
          {"ID":"2", "stock":"WMT", "price": "$68.75",
           "industry":"Tech"},
          {"ID":"3", "stock":"AMZN", "price": "$810.45",
           "industry":"Tech"},
          {"ID":"4", "stock":"FB", "price": "$95.34",
          "industry":"Tech"},
        ],
      };
    }
  
    updateStock(stock){
    // let stock = (e.currentTarget).data('stock');
      let url=`https://www.google.com/finance/info?q=NASDAQ:${stock}`;
      axios.get(url)
           .then(response => {
          let json = parser.parse(response.data);
          let bank = this.state.stocks;
          bank.price = json.l;
          this.setState({
              stocks: bank
          })
      });
    }

    deleteStock(stock) {
        
    }
  
    render(){
      return (
        <div>
          <table>
              <thead>
                  <tr>
                      <th> ID</th>
                      <th> stock</th>
                      <th> price</th>
                      <th> industry</th>
                  </tr>
              </thead>
              <tbody>
              {
                  this.state.stocks.map((stocks, i) => {
                      return (
                        <tr key={i}>
                            <td>{stocks.ID}</td>
                            <td>{stocks.stock}</td>
                            <td>{stocks.price}</td>
                            <td>{stocks.industry}</td>
                            <td> <button onClick={() => {
                              {this.updateStock(stocks.stock)}
                            }}>refresh</button>
                            </td>
                            <td> <button onClick={() => {
                              {this.deleteStock(stocks.stock)}
                            }}>delete</button>
                            </td>
                        </tr>
                      );
                  })
              }
              </tbody>
          </table>
        </div>
      );
    }
  }

  export default Stock2