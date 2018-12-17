import React from 'react';
import { NavLink } from "react-router-dom";

const UsersList = (props) => {
    return (
        <div>
            <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Name</th>
                    <th scope="col">SurName</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.users.map( (user, i) => 
                    <tr key={i} >
                        <th scope="row">{user.id}</th>
                        <td>{user.userName}</td>
                        <td>{user.name}</td>
                        <td>{user.surName}</td>
                        <td>
                            <NavLink to={"/users/" + user.id} exact className="nav-link" >Details</NavLink>
                        </td>
                        <td>
                            <button className="btn btn-warning" onClick={() => props.handleOnDelete(user.id)} > Delete</button>
                        </td>
                    </tr>
                )}
                
            </tbody>
            </table>
        </div>
    );
};

export default UsersList;