import React from 'react'
import { Link, Redirect,  } from 'react-router-dom'
import { connect } from 'react-redux'

const Landing = ({isAuthenticated}) => {
  if(isAuthenticated){
    return <Redirect to="/books"/>
}
    return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">BookReseller</h1>
          <p className="lead">
            Selling and Reselling of books, here you can buy old books
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Sign In</Link>
          </div>
        </div>
      </div>
    </section>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)
