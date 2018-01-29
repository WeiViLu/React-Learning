import {SET_FILTER} from './actionTypes'

export const setFilter = filtertype => ({
    type: SET_FILTER,
    filter: filtertype
});