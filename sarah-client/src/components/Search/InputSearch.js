import React, { Component}  from 'react';
import ReactDOM from 'react-dom';
import PropTypes  from 'prop-types';
import test from './test';


const fakeData = [
  {name: 'AAPL', price: 200, favorite: false},
  {name: 'GOOGL', price: 500, favorite: false},
  {name: 'AMZN', price: 300, favorite: false}
]

class InputSearch extends React.Component {
  state = {
    input: '',
    notFound: false,
    searchedStocks: []
  }

  searchForStock = () => {
    const stock = fakeData.find(data => data.name === this.state.input)
    const {searchedStocks} = this.state;
    !stock
      ? this.setState({notFound: true})
      : this.setState({
          searchedStocks: [...searchedStocks, stock],
          notFound: false
        })
  }

  toggleFaves = idx => {
    const {searchedStocks} = this.state;
    const stock = searchedStocks[idx]
    this.setState({
      searchedStocks: [
        ...searchedStocks.slice(0, idx),
        {...stock, favorite: !stock.favorite},
        ...searchedStocks.slice(idx + 1)
      ]
    }, () => {
      this.props.storeMyStocks(this.state.searchedStocks.filter(s => s.favorite))
    })
  }

  render() {
    return (
      <div className="form-group">
      <input type='text'
        value={this.state.input}
        onChange={evt => this.setState({input: evt.target.value})}
      />
      <button onClick={this.searchForStock}>Enter</button>
      {this.state.notFound ? "No stock found!" : null}
      {this.state.searchedStocks.map((stock, idx) => (
        <p key={stock.name}>
          {stock.name} - {stock.price}
          {stock.favorite
            ? <button onClick={() => this.toggleFaves(idx)}>Remove from Favorites</button>
            : <button onClick={() => this.toggleFaves(idx)}>Add to Favorites</button>
          }
        </p>
      ))}
      </div>
    )
  }

}

export default InputSearch;
