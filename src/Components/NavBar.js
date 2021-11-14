import React,{ Fragment} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {logout} from '../Actions/Auth'


const NavBar = ({Auth:{isAuthenticated, loading}, logout})=>{

    const guestLinks=(
        <ul>
            <li>
                <Link to="/books">
                    <i className="fas fa-book"></i>{' '}
                    Books
                </Link>
            </li>
            <li>
                <Link to="/register">
                    <i className="fas fa-user-plus"></i>{' '}
                    Register
                </Link></li>
            <li>
                <Link to="/login">
                    <i className="fas fa-sign-in-alt"></i>{' '}
                Login
                </Link>
            </li>
      </ul>
    )

    const authLinks = (
        <ul>
            <li>
                
                <Link to="/search">
                    <i className="fas fa-search"></i>{' '}
                      Search
                </Link>
            </li>
            <li>
                <Link to="/me/books">
                    <i className="fas fa-user"></i>{' '}
                    Your Books
                </Link>
            </li>
            <li>
                <Link to="/books">
                    <i className="fas fa-book"></i>{' '}
                    Books
                </Link>
            </li>
            <li>
                <Link to="/" onClick={logout} >
                    <i className="fas fa-sign-out-alt" ></i>{' '}
                    <span  className="hide-sm">LogOut</span>
                </Link>
            </li>
        </ul>
    )
    return (
        <nav className="navbar bg-dark">
            <h1>
            <Link to="/"><i className="fas fa-book-open"></i> BookResell</Link>
            </h1>
            <Fragment>
                {isAuthenticated  ?authLinks : guestLinks }
            </Fragment>
        </nav>
    )
}

const mapStateToProps = state =>({
    Auth: state.Auth 
})

export default connect(mapStateToProps,{logout})(NavBar)