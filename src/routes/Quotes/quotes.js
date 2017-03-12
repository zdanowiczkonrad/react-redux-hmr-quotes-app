import { connect } from 'react-redux'
import React from 'react'
import { NewQuoteForm, Quote } from './quote'

@connect(state => ({
    quotes: state.quotes.all,
    likes: state.quotes.likes
}))
export default class Quotes extends React.Component {

    render() {
        const { quotes, likes } = this.props;

        return <div style={{background: 'white', padding: '10px 0'}}>
             {likes.length > 0 ? <h1><strong>{likes.length}</strong> cool quotes</h1> : <h1>Like a quote!</h1>}
             <NewQuoteForm/>
             {quotes.map(quote =>
                <Quote quote={quote} onQuoteLiked={() => {}} likedQuotes={[]}/>
            )}
       
        </div>;
    }
}