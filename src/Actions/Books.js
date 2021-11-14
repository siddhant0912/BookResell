import api from '../Utils/api'
import {setAlert} from './Alert'
import {GET_BOOKS, SEARCH_BOOKS, CLEAR_SEARCH, ADD_BOOK, GET_BOOK, FIND_OWNER, CLEAR_BOOK} from './types'

export const getAllbooks = () => async dispatch => {
    try{
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
        const res= await api.get('/books/?sortBy=asec', config)
        dispatch({
            type: GET_BOOKS,
            payload:res.data
        })
    }catch(e){
        console.log({...e})
    }
}

export const SearchBooks = query => async dispatch =>{
    if(query === ''){
        dispatch({
            type:CLEAR_SEARCH
        })
        return
    }
    try{
        const res =  await api.get(`/books/search/?key=${query}`)
        dispatch({
            type:SEARCH_BOOKS,
            payload:res.data
        })
        
    }catch(e){
        console.log({...e})
    }
}

export const AddBooks = (title,author,publisher,genre,price,availability,description,photo) => async dispatch =>{
    const formdata = new FormData()
    
    formdata.append('title', title)
    formdata.append('author', author)
    formdata.append('publisher', publisher)
    formdata.append('genre', genre)
    formdata.append('price', price)
    formdata.append('availabilty', availability)
    formdata.append('description', description)
    formdata.append('photo', photo)
    try{
        const res = await api.post('/books',formdata)
        dispatch({
            type:ADD_BOOK,
            payload:res.data
        })
        dispatch(setAlert('Book Added Succesfully', 'success'))
    }catch(e){
        console.log({...e})
        dispatch(setAlert('Could not add book', 'danger'))
    }
}

export const getBookById = (id) => async dispatch =>{
    dispatch({
        type: CLEAR_BOOK
    })
    try{
        console.log('here2')
        const res= await api.get(`/books/${id}`)
        dispatch({
            type:GET_BOOK,
            payload:res.data
        })
    }catch(e){
        console.log({...e})
    }
}



export const getOwnerById = id  => async dispatch =>{
    try{
        const res= await api.get(`/users/${id}`)
        dispatch({
            type:FIND_OWNER,
            payload:res.data
        })
    }catch(e){
        console.log({...e})
    }
}

