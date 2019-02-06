import React, { Component } from 'react';
import Main from './Main.js';
import Nav from './Nav.js';
import Start from './Start.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      quote: {id: 0, quote: ""},
      color: {id: 0, color: '#AFAFAF'},
      image: []
    }
    this.changeQuote = this.changeQuote.bind(this);
  }



  randomChoice = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  checkNoRepeat = (array, state) => {
    let obj;
    do {
      obj = this.randomChoice(array);
    } while (obj.id === state.id);
    return obj;
  }

  quoteSelection = (btn) => {
    switch(btn) {
      case 'cat_button':
        return this.checkNoRepeat(CAT_QUOTES, this.state.quote);
      case 'dog_button':
        return this.checkNoRepeat(DOG_QUOTES, this.state.quote);
      case 'random_button':
        return this.checkNoRepeat(this.randomChoice([CAT_QUOTES, DOG_QUOTES]), this.state.quote);
    }
  };

  selectURL = (btn) => {
    return btn === 'cat_button' ? 'https://api.thecatapi.com/v1/images/search?mime_types=jpg,png' : 'https://api.thedogapi.com/v1/images/search?mime_types=jpg,png'
  }

  async changeQuote(e) {
    let btn = e.target.id;
    if (btn === 'random_button') btn = this.randomChoice(['cat_button', 'dog_button']);
    const quote = this.quoteSelection(btn);
    const color = this.checkNoRepeat(COLORS, this.state.color);
    const url = this.selectURL(btn);

    let response = await fetch(url);
    let image = await response.json();

    await console.log(image);

    await this.setState({
      active: true,
      quote: quote,
      color: color,
      image: image
    });
  }

  render() {
    return (
      <div
        id="main_container" style={{backgroundColor: this.state.color.color}}>
        {!this.state.active ? <Start /> : <Main
                                            selectedImage={this.state.image}
                                            selectedQuote={this.state.quote}
                                          />}
        <Nav
          changeQuote={this.changeQuote}
        />
      </div>
    );
  }
}

const CAT_QUOTES = [
{id: 1,
 author: 'Charles Dickens',
 quote: "What greater gift than the love of a cat."},
{id: 2,
 author: "Albert Schweitzer",
 quote: "There are two means of refuge from the miseries of life: music and cats."},
{id: 3,
 author: "Theophile Gautier",
 quote: "A cat will be your friend, but never your slave."},
{id: 4,
 author: "Nan Porter",
 quote: "If cats could talk, they wouldnít."},
{id: 5,
 author: "Rod McKuen",
 quote:"Cats have it all: admiration, an endless sleep, and company only when they want it."},
{id: 6,
 author: "Unknown",
 quote: "People who don't like cats were probably mice in an earlier life."},
{id: 7,
 author: "Tay Hohoff",
 quote: "There are few things in life more heartwarming than to be welcomed by a cat."},
{id: 8,
 author: "W.L. George",
 quote: "Cats know how to obtain food without labor, shelter without confinement, and love without penalties."},
{id: 9,
 author: "Terry Pratchett",
 quote: "In ancient times cats were worshipped as gods; they have not forgotten this."},
{id: 10,
 author: "Ernest Hemingway",
 quote: "A cat has absolute emotional honesty: human beings, for one reason or another, may hide their feelings, but a cat does not."}
];

const DOG_QUOTES = [
{id: 11,
 author: "Robert Wagner",
 quote: "A dog will teach you unconditional love. If you can have that in your life, things won't be too bad."},
{id: 12,
 author: "Duane Chapman",
 quote: "Dog is God spelled backward."},
{id: 13,
 author: "Charles de Gaulle",
 quote: "The better I get to know men, the more I find myself loving dogs."},
{id: 14,
 author: "Mark Twain",
 quote: "The dog is a gentleman; I hope to go to his heaven not mans."},
{id: 15,
 author: "W.R. Purche",
 quote: "Everyone thinks they have the best dog. And none of them are wrong."},
{id: 16,
 author: "Agnes Turnbull",
 quote: "Dogsí lives are too short. Their only fault, really."},
{id: 17,
 author: "Robert Benchley",
 quote: "A dog teaches a boy fidelity, perseverance, and to turn around three times before lying down."},
{id: 18,
 author: "Robert Louis",
 quote: "You think dogs will not be in heaven? I tell you, they will be there long before any of us."},
{id: 19,
 author: "Josh Billings",
 quote: "A dog is the only thing on earth that loves you more than he loves himself."},
{id: 20,
 author: "Aldous Huxley",
 quote: "To his dog, every man is Napolean, hence the constant popularity of dogs."}
];

const COLORS = [
  {id: 1, color: "#ED5A3D"},
  {id: 2, color: "#FF4A4A"},
  {id: 3, color: "#FAE01C"},
  {id: 4, color: "#FFCA54"},
  {id: 5, color: "#58ED08"},
  {id: 6, color: "#FF0066"},
  {id: 7, color: "#FBB892"},
  {id: 8, color: "#A4EF33"},
  {id: 9, color: "#D31996"},
  {id: 10, color: "#FD7212"}
];

export default App;
