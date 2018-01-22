import * as ActionTypes from './ActionTypes.js'

export const increment = (countercaption) => {
    return {
        type:ActionTypes.INCREMENT,
        counterCaption:countercaption
    }
}

export const decrement= (countercaption) => {
    return {
        type:ActionTypes.DECREMENT,
        counterCaption:countercaption
    }
}
