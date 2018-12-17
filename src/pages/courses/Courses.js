import React, { Component } from 'react';
import {connect} from 'react-redux';
import { NavLink } from "react-router-dom";
import * as courseActions  from '../../actions/courseActions';

class Courses extends Component {

    handleOnDelete = (index) => {
        console.info(index);
        this.props.dispatch(courseActions.deleteCourse(index));
    }

    render() {
        return (
            <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Course Name</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.props.courses.map( (course, i) => 
                    <tr key={i} >
                        <th scope="row">{i}</th>
                        <td>{course.title}</td>
                        <td>
                            <NavLink to={"/courses/" + i} exact className="nav-link" >Details</NavLink>
                        </td>
                        <td>
                            <button className="btn btn-warning" onClick={() => this.handleOnDelete(i)} > Delete</button>
                        </td>
                    </tr>
                )}
                
            </tbody>
            </table>
        );
    }
}

function mapStateToProps(state){
    return {
        courses: state.courses.list
    }
}

export default connect(mapStateToProps)(Courses);