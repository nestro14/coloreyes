import {combineReducers} from 'redux'
import plates from './plate_reducers'

const rootReducer = combineReducers({
    plates
});

export default rootReducer;