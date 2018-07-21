import PropTypes  from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello {this.props.name}</h1>
    );
  }
}

Greeting.defaultProps = {
  name: ''
};

Greeting.propTypes = {
  name: PropTypes.string
};

export default Greeting;
