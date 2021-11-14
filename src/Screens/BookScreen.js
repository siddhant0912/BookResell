import React, {useEffect} from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {getAllbooks} from '../Actions/Books'
import PropTypes from 'prop-types'
import BookItem from '../Components/Books/BookItem'
import Carousel from "react-elastic-carousel";
import Spinner from '../Components/Spinner'

const BookScreen =({getAllbooks, book:{books,loading}, isAuthenticated}) =>{
    const SciFi = books.filter(book => book.genre === 'SciFi')
    const drama = books.filter(book => book.genre === 'Drama')
    const comedy = books.filter(book => book.genre === 'Comedy')
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];
    useEffect(() =>{
        getAllbooks()
    }, [getAllbooks])
    return loading && books.length ===0 ? <Spinner/> :  <Fragment>
        {books.length > 0 && (
            <Fragment>
            <h1 className="genre-title">New Arrival:</h1>
            <div>
            <ol className="books-grid">
                <Carousel breakPoints={breakPoints}>
                {books.map(book =>(
                    <BookItem key={book._id} book={book}/>
                ))}
               </Carousel>
            </ol>
            </div>
            <hr className="rounded"></hr>
            </Fragment>
            
        )}
        {SciFi.length > 0 && (
            <Fragment>
            <h1 className="genre-title">Sci-Fi:</h1>
            <div>
            <ol className="books-grid">
                <Carousel breakPoints={breakPoints}>
                {SciFi.map(book =>(
                    <BookItem key={book._id} book={book}/>
                ))}
               </Carousel>
            </ol>
            </div>
            <hr className="rounded"></hr>
            </Fragment>   
        )}
        {drama.length > 0 && (
            <Fragment>
            <h1 className="genre-title">Drama:</h1>
            <div>
            <ol className="books-grid">
                <Carousel breakPoints={breakPoints}>
                {drama.map(book =>(
                    <BookItem key={book._id} book={book}/>
                ))}
               </Carousel>
            </ol>
            </div>
            <hr className="rounded"></hr>
            </Fragment>   
        )}
        {comedy.length > 0 && (
            <Fragment>
            <h1 className="genre-title">Comedy:</h1>
            <div>
            <ol className="books-grid">
                <Carousel breakPoints={breakPoints}>
                {comedy.map(book =>(
                    <BookItem key={book._id} book={book}/>
                ))}
               </Carousel>
            </ol>
            </div>
            <hr className   ="rounded"></hr>
            </Fragment>    
        )} 
        {isAuthenticated && (
            <div className="add-book">
            <Link to="/add-book"> <button>Add a book</button></Link>
            </div>  
        )}
        </Fragment>
    
}

BookScreen.propTypes  ={
    getAllbooks: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}
const mapStateToProps = state =>({
    book:state.Books,
    isAuthenticated: state.Auth.isAuthenticated
})

export default connect(mapStateToProps, {getAllbooks})(BookScreen)