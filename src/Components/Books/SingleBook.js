import React , {useEffect} from 'react'

import {Card, Button} from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {getBookById} from '../../Actions/Books'
import Spinner from '../Spinner'
import { connect } from 'react-redux'

const SingleBook = ({auth:{loading},getBookById,book}) =>{
    const {id} = useParams()  
    useEffect(() =>{
        getBookById(id)
    }, [])
    
    if(book !== null){
        var {title, author, publisher,genre, availabilty, description } = book
    }else{
        return null
    }
   
  
    return loading || book === null ? <Spinner/> :( <div className="card-back">
    <Card style={{ width: '22rem' }} >
        <Card.Img variant="top" src={`http://localhost:3000/books/${id}/photo`} style={{width:"80%",marginTop:'10px' ,alignSelf:'center', borderWidth: "2px"}}/>
        <Card.Body>
            <Card.Title style={{fontWeight:'bold' , textAlign:'center'}}>{title !== null ? title : ' '}</Card.Title>
            <Card.Text >
                <b>Author:</b>{author}
            </Card.Text>
            <Card.Text>
                <b>Publisher:</b>{publisher}
            </Card.Text>
            <Card.Text>
                <b>Genre:</b>{genre}
            </Card.Text>
            <Card.Text>
                <b>Price:</b> <span className="price">{`Rs.${book.price}`}</span>
            </Card.Text>
            <Card.Text>
                <b>Availabilty:</b>{availabilty}
            </Card.Text>
            <Card.Text>
                <b>Description:</b>{description}
            </Card.Text>
            <Link to="/owner-info">
            <Button style={{fontWeight:'bold', alignSelf:'center', backgroundColor:'#673ab7', borderColor:'#673ab7'} }>Get Seller Info</Button>
            </Link>
        </Card.Body>
    </Card>
    </div>
    )    
}
SingleBook.propTypes  ={
    getBookById:PropTypes.func.isRequired,
}
const mapStateToProps = state =>({
    auth: state.Auth,
    book:state.Books.book,
})

export default connect(mapStateToProps,{getBookById})(SingleBook)