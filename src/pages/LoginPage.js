import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as loginActions from '../actions/loginActions';

class LoginPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    handleOnUserChanged = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handleOnPasswordChanged = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    onSubmit = () => {
        this.props.login(this.state.username);
    }

    render() {
        return (
            <section className="jumbotron text-center">
            <div className="container">
                <h1 className="jumbotron-heading">Login</h1>
                <div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username" value={this.state.username} onChange={this.handleOnUserChanged} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  value={this.state.password} onChange={this.handleOnPasswordChanged} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit} >Submit</button>
                </div>

            </div>
        </section>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.login
    }
}


function mapDispatchToProps(dispatch) {
    return {
        login: (username) => dispatch(loginActions.login(username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);