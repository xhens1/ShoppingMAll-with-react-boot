import React, { Component } from "react";
import '../layout/css/loginParts.css';
import UserService from './UserService'

export default class deleteUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userID:'',
          userPW:''
        };
    
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.changeuserIDHandler = this.changeuserIDHandler.bind(this);
        this.changeuserPWHandler = this.changeuserPWHandler.bind(this);
    }
    changeuserIDHandler = (e) => {
        this.setState({userID : e.target.value});
    }
    changeuserPWHandler = (e) => {
        this.setState({userPW : e.target.value});
    }

    handleFormSubmit(e){
        e.preventDefault();
        let user = {
            userID : this.state.userID,
            userPW : this.state.userPW
        };
        console.log("delete info => "+ JSON.stringify(user));
        UserService.deleteUser(user).then(res => {
            alert("delted !");
            window.location = "/";
        });
    }
      
    render() {
        return (
            <div>
                    <form onSubmit={this.handleFormSubmit}>

                    <h3>Delete User</h3>

                    <div className="form-group">
                        <label>Your ID</label>
                        <input type="text" className="form-control" placeholder="Enter ID" value={this.state.userID} onChange={this.changeuserIDHandler}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" value={this.state.userPW} onChange={this.changeuserPWHandler}/>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            </div>
        );
    }
}