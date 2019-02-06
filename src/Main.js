import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Main extends Component {
  render() {
    const {selectedQuote, selectedImage} = this.props;
    const image = selectedImage[0].url;
    return (
      <main>
        {console.log(image)}
        <div
          id="img"
          style={{backgroundImage: "url(" + image + ")"}}
        ></div>
        <div id="quotes">
          <h3 class="quote">{selectedQuote.quote}</h3>
          <h4 class="author">{selectedQuote.author}</h4>
        </div>
      </main>
    );
  }
}

export default Main;
