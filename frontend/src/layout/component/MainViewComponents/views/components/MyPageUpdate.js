import React, { Component } from "react";
import AuthenticationService from '../../../../../login/jwt/AuthenticationService';

export default class changeUserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userID:'',
            userName:'',
            userSex:'',
            userEmail:'',
            userPH:'',
            modified:0
        };
    
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.changeuserIDHandler = this.changeuserIDHandler.bind(this);
        this.changeuserNameHandler = this.changeuserNameHandler.bind(this);
        this.changeuserSexHandler = this.changeuserSexHandler.bind(this);
        this.changeuserEmailHandler = this.changeuserEmailHandler.bind(this);
        this.changeuserPHHandler = this.changeuserPHHandler.bind(this);
    }

    changeuserIDHandler = (e) => {
        this.setState({userID : e.target.value});
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

    handleFormSubmit(e){
        e.preventDefault();
        const timestamp = Date.now();
        let user = {
            userID : this.state.userID,
            userName : this.state.userName,
            userSex : this.state.userSex,
            userEmail : this.state.userEmail,
            userPH : this.state.userPH,
            modified : timestamp
        };
        console.log("user => "+ JSON.stringify(user));
        UserService.changeUserInfo(user).then(res => {
            window.location = "/";
        });
    }

    render() {
        return (
                    <form onSubmit={this.handleFormSubmit}>
                    <h3>Info Change</h3>

                    <div className="form-group">
                        <label>ID</label>
                        <input type="text" className="form-control" name="userID" value={this.state.userID} onChange={this.changeuserIDHandler}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="userPW" value={this.state.userPW} unselectable />
                    </div>

                    <div className="form-group">
                        <label>Your name</label>
                        <input type="text" className="form-control" name="userName" placeholder="name" value={this.state.userName} onChange={this.changeuserNameHandler} />
                    </div>
                        <div className="form-group">
                            <label>Gender</label><br/>
                            <label className="col-6 text-center">
                                <input type="radio" className="form-control" name ="userSex" value="Man" value="Man" onChange={this.changeuserSexHandler} /><p>Man</p>
                            </label>
                            <label className="col-6 text-center">
                                <input type="radio" className="form-control" name ="userSex" value="Woman" value="Woman" onChange={this.changeuserSexHandler} /><p>Woman</p>
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

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/sign-in">log in?</a>
                    </p>
                    </form>
        );
    }
}