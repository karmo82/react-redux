import React, { Component } from 'react';
import {connect} from 'react-redux';
import UsersList from './UsersList';
import { NavLink } from "react-router-dom";

class UsersPage extends Component {

    handleOnDelete = () => {

    }

    render() {

        console.log("UsersPage");
        console.log(this.props);

        return (
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Users List</h1>
                    <NavLink to={"/users/new"} exact className="nav-link" >Create new</NavLink>
                </div>
                {
                    this.props.list && this.props.list.length > 0 ? 
                        <UsersList users={this.props.list} handleOnDelete={this.handleOnDelete} > 
                        </UsersList>
                    :   <div>
                            loading
                        </div>
                }
            </section>
        );
    }
}

function mapStateToProps(state){
    return {
        list: state.users.list
    }
}

export default connect(mapStateToProps)(UsersPage);