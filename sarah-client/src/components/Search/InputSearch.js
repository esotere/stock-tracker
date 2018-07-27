import React, { Component}  from 'react';
import ReactDOM from 'react-dom';
import PropTypes  from 'prop-types';
import test from './test';


class InputSearch extends React.Component {
  state = {input: '',
  searchedStocks:[],

}

  handleButtonClick = (evt) => {
    evt.preventDefault();
    console.log(this.state.input)
     // this.props.storedInput(this.state.input)
     // this.setState({input: this.state.input})
  }

  render() {
  const {searchedStocks} = this.props;
    return (
      <div className="form-group">
      {this.state.searchedStocks.map(stock => <p>{stock.text}</p>)}
      <input type='text'
        value={this.state.input}
        onChange={evt => this.setState({input: evt.target.value})}
      />
      <button onClick={this.handleButtonClick}>Enter</button>
      </div>

    )
  }
}

// InputSearch.propTypes = {
//   input: ''
// };
//
// InputSearch.propTypes = {
//   input: PropTypes.string
// };

export default InputSearch;
