import { connect } from 'react-redux'
import React from 'react'

@connect(state => ({ quotes: state.quotes }))
export default class Quotes extends React.Component {

    render() {
        console.log(this.props);
        return <div>{JSON.stringify(this.props.quotes)}</div>;
    }
}