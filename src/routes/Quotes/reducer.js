import { quotes } from '../../../../../quotes.json';


const QUOTE_ADDED = 'QUOTE_ADDED';

export const addQuote = quote => ({ type: QUOTE_ADDED, quote });


const initialState = {
    all: quotes
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case QUOTE_ADDED: {
            return { all: [ action.quote, ...state.all ]}
        }
    }
    return state;
}