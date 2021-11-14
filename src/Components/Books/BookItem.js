import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {getBookById} from '../../Actions/Books'

const BookItem = ({book, getBookById}) =>{
    const {title, author,price , _id, owner} = book
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <Link to={`/books/${_id}`}>
                    <div className="book-cover" style={{ width: 128, height: 220, backgroundImage: `url(http://localhost:3000/books/${_id}/photo)`}}></div>
                    </Link>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
                <div className="book-price">{`Rs. ${price}`}</div>
            </div>
        </li>
    )
}



export default connect(null, {getBookById})( BookItem)