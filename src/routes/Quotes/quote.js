import React, { Component } from 'react';
import { connect } from 'react-redux';
import images from './images/images';
import { addQuote, toggleQuoteLike, isLiked } from './reducer';
import './quotes.css';
const HEART = '❤️️';

@connect((state, props) => ({
  isLiked: isLiked(state, props.quote)
}))
export class Quote extends React.Component {
  onQuoteLiked = () => {
    this.props.dispatch(toggleQuoteLike(this.props.quote));
  }

  render() {
    return  <div className="quote">
        <img className="avatar" src={this.props.quote.avatar || images[this.props.quote.author]}/>
        <div className="content">
          <span className="author">{this.props.quote.author}
            <button
              onClick={() => this.onQuoteLiked()}
              className={`like` + (this.props.isLiked ? ' active' : '') }>
                {this.props.isLiked && HEART} Like
            </button>
          </span>
          <span className="text">{this.props.quote.text}</span>
      </div>
    </div>;
  }
}

@connect()
export class NewQuoteForm extends React.Component {
  authorInput;
  quoteInput;
  avatarInput;

  onQuoteCreate = () => {
    const newQuote = {
      author: this.authorInput.value,
      text:  this.quoteInput.value,
      avatar:  this.avatarInput.value
    }

    this.props.dispatch(addQuote(newQuote));
  }

  render() {
    return <div className="new-quote"> 
        <input type="text" ref={el => this.authorInput = el} placeholder="author"/>
        <input type="text" ref={el => this.quoteInput = el} placeholder="quote" />
        <input type="text" ref={el => this.avatarInput = el} placeholder="avatar image url..."/>
        <button onClick={this.onQuoteCreate}>Add!</button>
      </div>;
      }
}