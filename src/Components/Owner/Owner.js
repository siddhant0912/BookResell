import React,{useEffect} from 'react'
import { Card,ListGroupItem,ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import {getOwnerById} from '../../Actions/Books'
import PropTypes from 'prop-types'

const Owner = ({owner,book, getOwnerById}) =>{
    useEffect(() =>{
        getOwnerById(book.owner)
    }, [])
    const {title, description} = book
    if(owner !== null){
        var {name, email,phone} = owner
    }else{
        return null
    }
    return(
        <div className="card-back">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/236x/77/5b/91/775b91d4b1bfcac2aa3292b47763c1b1.jpg" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{name}</ListGroupItem>
                <ListGroupItem>{email}</ListGroupItem>
                <ListGroupItem>{`+91 ${phone}`}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href={`mailto: ${email}`}>
                    <img src="https://cdn.wccftech.com/wp-content/uploads/2020/09/Gmail.png"/>
                </Card.Link>
               
            </Card.Body>
        </Card>
        </div>
    )
}

Owner.propTypes = ({
    getOwnerById: PropTypes.func.isRequired,
})

const mapStateToProps = state =>({
    owner:state.Books.bookowner,
    book:state.Books.book
})
export default connect(mapStateToProps, {getOwnerById})(Owner)