import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from './Button.js';

class Nav extends Component {
  render() {
    const {changeQuote} = this.props;
    return (
      <nav>
        <Button changeQuote={changeQuote} id="cat_button" value="cat's  quotes" />
        <Button changeQuote={changeQuote} id="random_button" value="random quotes" />
        <Button changeQuote={changeQuote} id="dog_button" value="dog's  quotes"/>
      </nav>
    );
  }
}

export default Nav;
