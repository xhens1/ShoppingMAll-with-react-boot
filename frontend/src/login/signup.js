import React, { Component } from "react";
import { Button, Modal, ModalBody } from 'reactstrap';
import UserService from './UserService'

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,

            userID:'',
            userPW:'',
            userName:'',
            userSex:'',
            userEmail:'',
            userPH:'',
            role:''
        };
    
        this.toggle = this.toggle.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.changeuserIDHandler = this.changeuserIDHandler.bind(this);
        this.changeuserPWHandler = this.changeuserPWHandler.bind(this);
        this.changeuserNameHandler = this.changeuserNameHandler.bind(this);
        this.changeuserSexHandler = this.changeuserSexHandler.bind(this);
        this.changeuserEmailHandler = this.changeuserEmailHandler.bind(this);
        this.changeuserPHHandler = this.changeuserPHHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
    }

    changeuserIDHandler = (e) => {
        this.setState({userID : e.target.value});
    }
    changeuserPWHandler = (e) => {
        this.setState({userPW : e.target.value});
    }
    changeuserNameHandler = (e) => {
        this.setState({userName : e.target.value});
    }
    changeuserSexHandler = (e) => {
        this.setState({userSex : e.target.value});
    }
    changeuserEmailHandler = (e) => {
        this.setState({userEmail : e.target.value});
    }
    changeuserPHHandler = (e) => {
        this.setState({userPH : e.target.value});
    }
    changeRoleHandler = (e) => {
        this.setState({Role : e.target.value});
    }
    
    toggle() {
        this.setState(prevState => ({
        modal: !prevState.modal
        }));
    }

    //입력한 정보로 회원가입
    handleFormSubmit(e){
        e.preventDefault();
        let user = {
            userID : this.state.userID,
            userPW : this.state.userPW,
            userName : this.state.userName,
            userSex : this.state.userSex,
            userEmail : this.state.userEmail,
            userPH : this.state.userPH
        };
        console.log("user => "+ JSON.stringify(user));
        UserService.createUser(user).then(res => {
            window.location = "/";
        });
    }

    render() {
        return (
            <div>
                <button className="loginComponents" onClick={this.toggle}>{this.props.buttonLabel}</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalBody>
                    <form onSubmit={this.handleFormSubmit}>
                    <h3>Register</h3>

                    <div className="form-group">
                        <label>ID</label>
                        <input type="text" className="form-control" name="userID" placeholder="Enter ID" value={this.state.userID} onChange={this.changeuserIDHandler}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="userPW" placeholder="Enter password" value={this.state.userPW} onChange={this.changeuserPWHandler} />
                    </div>

                    <div className="form-group">
                        <label>Your name</label>
                        <input type="text" className="form-control" name="userName" placeholder="name" value={this.state.userName} onChange={this.changeuserNameHandler} />
                    </div>
                        <div className="form-group">
                            <label>Gender</label><br/>
                            <label className="col-6 text-center">
                                <input type="radio" className="form-control" name ="userSex" value="Man" onChange={this.changeuserSexHandler} /><p>Man</p>
                            </label>
                            <label className="col-6 text-center">
                                <input type="radio" className="form-control" name ="userSex" value="Woman" onChange={this.changeuserSexHandler} /><p>Woman</p>
                            </label>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name ="userEmail" placeholder="Enter email" value={this.state.userEmail} onChange={this.changeuserEmailHandler} />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" className="form-control" name ="userPH" placeholder="네 전화번호" value={this.state.userPH} onChange={this.changeuserPHHandler} />
                    </div>

                    <div className="form-group">
                            <label>To do</label><br/>
                            <label className="col-6 text-center">
                                <input type="radio" className="form-control" name ="role" value="User" onChange={this.changeRoleHandler} /><p>User</p>
                            </label>
                            <label className="col-6 text-center">
                                <input type="radio" className="form-control" name ="role" value="Seller" onChange={this.changeRoleHandler} /><p>Seller</p>
                            </label>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/sign-in">log in?</a>
                    </p>
                    </form>
                </ModalBody>
                </Modal>
            </div>
        );
    }
}