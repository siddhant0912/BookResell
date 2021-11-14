import React from 'react'
import { Fragment } from 'react'
import { connect } from 'react-redux'

const UserProfile = ({user}) =>{
    console.log(user)
    return(
        <Fragment>

        </Fragment>
    )
}
const mapStateToProps = state => ({
    user: state.Auth.user
})

export default connect(mapStateToProps,{})(UserProfile)