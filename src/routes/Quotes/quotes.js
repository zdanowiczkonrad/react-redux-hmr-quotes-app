import { connect } from 'react-redux'
import React from 'react'

import { NewQuoteForm, Quote } from './quote';
@connect(state => ({ quotes: state.quotes }))
export default class Quotes extends React.Component {

    render() {
        const { all } = this.props.quotes;
        console.log('all', all);
        console.log(this.props.quotes);
        return <div>
            {all.map(quote => <Quote quote={quote} onQuoteLiked={() => {}} likedQuotes={[]}/>)}
        <NewQuoteForm/>
        </div>;
    }
}