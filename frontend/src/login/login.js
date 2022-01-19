import React, { Component } from "react";
import { Button, Modal, ModalBody } from 'reactstrap';
import '../layout/css/loginParts.css';
import AuthenticationService from './jwt/AuthenticationService'
import UserService from './UserService'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,

            userID: localStorage.getItem("authenticatedUser") || '',
            userPW: '',
            token: localStorage.getItem("token") || '',
            hasLoginFailed: false,
            showSuccessMessage: false
        };
    
        this.toggle = this.toggle.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.changeuserIDHandler = this.changeuserIDHandler.bind(this);
        this.changeuserPWHandler = this.changeuserPWHandler.bind(this);
    }
    
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    changeuserIDHandler = (e) => {
        this.setState({userID : e.target.value});
    }
    changeuserPWHandler = (e) => {
        this.setState({userPW : e.target.value});
    }

    //로그인 시도
    handleFormSubmit(e){
        e.preventDefault();
        let user = {
            userID : this.state.userID,
            userPW : this.state.userPW
        };
        console.log("login info => "+ JSON.stringify(user));

        AuthenticationService
        .executeJwtAuthenticationService(this.state.userID, this.state.userPW)
        .then((response) => {
            console.log(response)
            this.setState({
                token: response.data.token
            });
            AuthenticationService.registerSuccessfulLoginForJwt(this.state.userID,this.state.token)
            alert("login token : "+response.data.token);
            window.location.href = 'http://localhost:3000/';
        }).catch( () =>{
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        })
    }
      
    render() {
        return (
            <div>
                <button className="loginComponents" onClick={this.toggle}>{this.props.buttonLabel}</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalBody>
                    <form onSubmit={this.handleFormSubmit}>

                    <h3>Log in</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="Enter email" value={this.state.userID} onChange={this.changeuserIDHandler}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" value={this.state.userPW} onChange={this.changeuserPWHandler}/>
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
                </ModalBody>
                </Modal>
            </div>
        );
    }
}