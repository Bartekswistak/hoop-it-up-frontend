import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import loginForm from './reducers/loginForm.js'
import signupForm from './reducers/signupForm.js'
import currentUser from './reducers/currentUser.js'
import myPlayerCard from './reducers/myPlayerCard.js'
import playerCardForm from './reducers/playerCardForm.js'
import usersReducer from './reducers/usersReducer.js'


const reducer = combineReducers({
    currentUser,
    loginForm,
    signupForm,
    myPlayerCard,
    playerCardForm,
    usersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)) )

export default store;