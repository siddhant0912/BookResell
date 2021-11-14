import React, {Fragment,useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import { login } from '../../Actions/Auth'
import { connect } from 'react-redux'

const  Login= ({login, isAuthenticated}) => {
    const [formData, setFormData] =useState({
        email:'',
        password:''
    })

    const {email, password} =formData

    const onChange = e => setFormData({...formData, [e.target.name]:e.target.value})

    const onSubmit =async e =>{
        e.preventDefault()
        login(email, password)
       console.log('Successful Login')
    }
    
    if(isAuthenticated){
        return <Redirect to="/books"/>
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Sign IN</h1>
                <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
                <form className="form" onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="email" value={email} onChange={e => onChange(e)} placeholder="Email Address" name="email" />
                    </div>
                    <div className="form-group">
                        <input type="password" value={password} onChange={e => onChange(e)} placeholder="Password" name="password" minLength="6"/>
                    </div>
                        <input type="submit" className="btn btn-primary" value="Sign" />
                </form>
                <p className="my-1">Don't have an account? <Link to="/register">Sign In</Link></p>
        </Fragment>
    )
}
const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated
})

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

export default connect(mapStateToProps,{login})(Login)

