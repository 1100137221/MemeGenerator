

import {combineReducers} from 'redux';
import {REVICE_MEMES, NEW_NAME } from '../actions';

function memes(state=[], action) {
    switch (action.type) {
        case REVICE_MEMES:
            return action.memes;
        default:
            return state ;
    }
}

function myNames(state=[], action) {
    switch (action.type) {
        case NEW_NAME:
            state = [...state, action.name];
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ memes, myNames }) ;
export default rootReducer ;