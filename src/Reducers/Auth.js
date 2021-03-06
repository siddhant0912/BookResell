import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, REGISTER_FAIL, LOAD_USER, AUTH_ERROR } from "../Actions/types"
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: null
}

export default (state= initialState, action) =>{
    const{type,payload}=action
    switch(type){
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case AUTH_ERROR:
        case REGISTER_FAIL:
        case LOGIN_FAIL:    
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }

        case LOAD_USER:
            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }    
        default:
            return state
    }
}