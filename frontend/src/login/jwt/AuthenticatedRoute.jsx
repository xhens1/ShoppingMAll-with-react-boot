import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

//토큰이 유요하지 않다면 
class AuthenticatedRoute extends Component {    
    render() {
        if(AuthenticationService.isUserLoggedIn()) {
            return <Route {...this.props}/>
        } else {
            return <Redirect to="/"/>
        }

    }
}

export default AuthenticatedRoute