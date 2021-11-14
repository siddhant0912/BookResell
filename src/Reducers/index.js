import { combineReducers } from 'redux'
import Auth from './Auth'
import Alert from './Alert'
import Books from './Books'

export default combineReducers({
    Auth,
    Alert,
    Books 
})