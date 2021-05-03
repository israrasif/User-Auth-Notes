import userReducer from '../reducer/userReducer'
import tokenReducer from '../reducer/tokenReducer'
import notesReducer from '../reducer/notesReducer'
import registerReducer from '../reducer/registerReducer'

import thunk from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware} from 'redux'

const configureStore = () => {

    const store = createStore(combineReducers({
        userDetails: userReducer,
        userToken: tokenReducer,
        notes: notesReducer,
        registered: registerReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore