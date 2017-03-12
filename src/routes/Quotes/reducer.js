import { quotes } from '../../../../../quotes.json';

const QUOTE_ADDED = 'QUOTE_ADDED';
const QUOTE_LIKED = 'QUOTE_LIKED';
const QUOTE_UNLIKED = 'QUOTE_UNLIKED';

const assign = (left, right) => {
    return Object.assign({}, left, right);
};

export const isLiked = (state, quote) => {
    return state.quotes.likes.indexOf(quote) > -1;
}
export const addQuote = quote => ({ type: QUOTE_ADDED, quote });
export const addQuoteLike = quote => ({ type: QUOTE_LIKED, quote });
export const removeQuoteLike = quote => ({ type: QUOTE_UNLIKED, quote });

export const toggleQuoteLike = quote => (dispatch, getState) => {
    if (isLiked(getState(), quote)) {
        return dispatch(removeQuoteLike(quote));
    } else {
        return dispatch(addQuoteLike(quote));
    }
}

const initialState = {
    all: quotes,
    likes: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case QUOTE_ADDED: {
            return assign(state, { all: [ action.quote, ...state.all ]});
        }
        case QUOTE_LIKED: {
            return assign(state, { likes: [ ...state.likes, action.quote ]});
        }
        case QUOTE_UNLIKED: {
            return assign(state, { likes: state.likes.filter(liked => liked !== action.quote )});
        }
    }
    return state;
}
