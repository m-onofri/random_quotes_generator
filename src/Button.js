import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {id, value, changeQuote} = this.props;
    return (
      <div onClick={(e) => changeQuote(e)} className="btn" id={id}>{value}</div>
    );
  }
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
export default Button;
