import React, { Component } from 'react';
// import MyStock from '../components/stickyNote';


class Stocks extends Component {
  render(){
    console.log(this.props.stocks)
    return (
      <div>
        {this.props.stocks.map(stock =>
          <p key={stock.name}>
            {stock.name}<br/>
            {stock.price}
          </p>
        )}
      </div>
    )
  }
}


export default Stocks;
