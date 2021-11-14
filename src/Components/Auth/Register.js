  
import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {register} from '../../Actions/Auth'
import {setAlert} from '../../Actions/Alert'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const Register = ({register, isAuthenticated, setAlert}) =>{
    const [formData, setFormData] =useState({
        name: '',
        email:'',
        phone:'',
        password:'',
        password2:''
    })
    const {name, email, phone,password, password2} =formData

    const onChange = e => setFormData({...formData, [e.target.name]:e.target.value})

    const onSubmit =async e =>{
        e.preventDefault()

        if(password !== password2){  
           setAlert('Passwords do not match', 'danger')
        }else{
            register(name,email,password,phone)
            console.log('User Registered')
        }
    }
    if(isAuthenticated){
        return <Redirect to="/books"/>
    }
    return(
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
                <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
                <form className="form" onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="text" value={name} onChange={e=> onChange(e)} placeholder="Name" name="name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" value={email} onChange={e => onChange(e)} placeholder="Email Address" name="email" />
                    </div>
                    <div className="form-group">
                        <input type="phone" value={phone} onChange={e=> onChange(e)} placeholder="Phone Number" name="phone" required />
                    </div>
                    <div className="form-group">
                        <input type="password" value={password} onChange={e => onChange(e)} placeholder="Password" name="password" minLength="6"/>
                    </div>
                    <div className="form-group">
                        <input type="password" value={password2} onChange={e => onChange(e)}  placeholder="Confirm Password" name="password2"minLength="6"/>
                    </div>
                        <input type="submit" className="btn btn-primary" value="Register" />
                </form>
                <p className="my-1">Already have an account? <Link to="/login">Sign In</Link></p>
    </Fragment>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated
})

Register.propTypes ={
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,

}

export default connect(mapStateToProps,{register, setAlert})(Register)