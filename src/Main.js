import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Main extends Component {
  render() {
    const {selectedQuote} = this.props;
    return (
      <main>
        <div id="img"></div>
        <div id="quotes">
          <h3 class="quote">{selectedQuote.quote}</h3>
          <h4 class="author">{selectedQuote.author}</h4>
        </div>
      </main>
    );
  }
}

export default Main;
