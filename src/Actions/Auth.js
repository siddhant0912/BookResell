import api from "../Utils/api"
import SetAuthToken from "../Utils/SetAuthToken"
import {setAlert} from './Alert'
import { LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_FAIL, LOAD_USER, AUTH_ERROR } from "./types"

export const loadUser = () => async dispatch => {
    //const token = localStorage.getItem('token')
    if (localStorage.token) {
        SetAuthToken(localStorage.token)
    }
    try {
        const res = await api.get('/users/me')
        dispatch({
            type: LOAD_USER,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}

export const register = (name,email,password,phone) => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try{
        const res = await api.post('/signup', {name,email,password,phone}, config)
        dispatch({
            type: REGISTER_SUCCESS,
            payload:res.data
        })
        dispatch(loadUser())
    }catch(e){
        const errors = e.response.data.error
        console.log({...e})
        if(errors){
            dispatch(setAlert(errors, 'danger'))
        }
        dispatch({
            type:REGISTER_FAIL
        })
    }
}

export const login = (email,password) => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try{
        const res = await api.post('/signin', {email,password}, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload:res.data
        })
        dispatch(loadUser())
    }catch(e){
        const errormsg = e.response.data.error
        if(errormsg){
            dispatch(setAlert(errormsg, 'danger'))
        }
        dispatch({
            type:LOGIN_FAIL 
        })
    }
}