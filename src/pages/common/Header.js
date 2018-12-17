import React from 'react';
import { Redirect, NavLink } from "react-router-dom";
import CurrentUser from '../../components/CurrentUser';


const HeaderComponent = (props) => {

    


    const user= "test";
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="/">Home</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link" activeStyle={{ fontWeight: "bold", color: "white" }} >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link" activeStyle={{ fontWeight: "bold", color: "white" }}>Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" activeStyle={{ fontWeight: "bold", color: "white" }}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacts" className="nav-link" activeStyle={{ fontWeight: "bold", color: "white" }} >Contacts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/courses" exact className="nav-link" activeStyle={{ fontWeight: "bold", color: "red" }}>Courses</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/users" exact className="nav-link" activeStyle={{ fontWeight: "bold", color: "red" }}>Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/orders" exact className="nav-link" activeStyle={{ fontWeight: "bold", color: "red" }}>Orders</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/orders/details/2" exact className="nav-link" activeStyle={{ fontWeight: "bold", color: "red" }}>Order details</NavLink>
                        </li>
                    </ul>
                    <CurrentUser class={"nav-link"} style={{color: 'white'}} currentUser={user} ></CurrentUser>
                </div>
                

            </nav>
        </header>
    );
};

export default HeaderComponent;