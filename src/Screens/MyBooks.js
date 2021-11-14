import React from 'react'
import { connect } from 'react-redux'
import BookItem from '../Components/Books/BookItem'
const MyBooks = ({book:{books}, auth:{isAuthenticated, user}}) =>{
    const mybooks = books.filter(book => book.owner === user._id)

    return(
        <ol className="books-grid">
                {mybooks.map(book =>(
                    <BookItem key={book._id} book={book}/>
                ))}
        </ol>
    )
}

const mapStateToProps = state =>({
    book:state.Books,
    auth: state.Auth
})

export default connect(mapStateToProps)(MyBooks)

