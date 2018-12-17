import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as loginActions from '../actions/loginActions';

class CurrentUser extends Component {

    constructor(props){
        super(props);
        console.log(props.currentUser);
    }

    handleLogOut = () => {
        this.props.logout();
    }

    render() {

        var comp = <label>Not logged</label>

        if(this.props.user.isLogged){
            comp = <label>
                Welcome {this.props.user.username} <button className="btn btn-default" onClick={this.handleLogOut} > LogOut </button>
                </label>
        }
        
        return (
            <div className={this.props.class} style={this.props.style} >
               {comp}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.login
    }
}

function mapDispatchToProps(dispatch){
    return {
        logout: () => dispatch(loginActions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUser);