import {ADD_BOOK, BOOKS_ERROR, CLEAR_SEARCH, GET_BOOKS,SEARCH_BOOKS, GET_BOOK, FIND_OWNER, CLEAR_BOOK} from '../Actions/types'

const initialState ={
    books: [],
    searchResults: [],
    book: null,
    bookowner:null,
    loading:true,
    error:{}
}

export default function(state =initialState, action){
    const {type, payload} = action
    switch(type){
        
        case SEARCH_BOOKS:
            return{
                ...state,
                searchResults:payload,
                loading:false
            }
        case CLEAR_SEARCH:
            return {
                ...state,
                searchResults: [],
                loading:false
            }    
        case GET_BOOKS:
            return {
                ...state,
                books:payload,
                loading:false
            }
        case GET_BOOK:
            return{
                ...state,
                book:payload,
                loading:false
            }
        case CLEAR_BOOK:
            return{
                ...state,
                book:null,
                loading:false
            }        
        case ADD_BOOK:{
            return {
                ...state,
                books:[payload,...state.books],
                loading:false
            }
        }  
        case FIND_OWNER:
            return{
                ...state,
                bookowner :payload,
                loading:false
            }  
        case BOOKS_ERROR:
            return{
                ...state,
                error:payload,
                loading:false
            }     
        default:
            return state    
    }
}