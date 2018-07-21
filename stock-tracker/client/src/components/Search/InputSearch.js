import React, { Component}  from 'react';
import ReactDOM from 'react-dom';
import PropTypes  from 'prop-types';


class InputSearch extends React.Component {
  state = {input: ''}

  handleButtonClick = (e) => {
    this.props.storeInput(this.state.input)
    this.setState({input: ''})
  }

  render() {
  const {searchedStocks} = this.props;
    return (
      <div>
      {[].map(stock => <p>{stock.text}</p>)}
      <input type='text'
        value={this.state.input}
        onChange={evt => this.setState({input: evt.target.value})}
      />
      <button onClick={this.handleButtonClick}>Enter</button>
      </div>
    )
  }
}

export default InputSearch;

//
//
// .defaultProps = {
//   input: ''
// };
//
// .propTypes = {
//   input: PropTypes.string
// };
