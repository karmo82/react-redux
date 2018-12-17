import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createCourse} from '../../actions/courseActions';
import Courses from './Courses';

class CoursesPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            course: {
                title: 'title 01'
            },
            courses: []
        };
    }

    handleOnChange = (event) => {

        this.setState({
            course: {
                title: event.target.value
            }
            
        });
    }

    handleOnClick = () =>{
        // var courses = this.state.courses;
        // courses.push(this.state.course);
        // console.log(courses);

        // this.setState({
        //     course: {
        //         title: ''
        //     },
        //     courses
        // })

        this.props.dispatch(createCourse(this.state.course));

        this.setState({
            course: {
                title: ''
            }
        })
    }

    render() {
        console.log("rendered!");
        return (
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Courses List</h1>
                    <p className="lead text-muted"></p>
                    
                    <div className="form-inline">
                        <div className="form-group">
                            <label>Course title</label>
                            <input type="text" className="form-control" value={this.state.course.title} onChange={this.handleOnChange} />
                        </div>
                        <button className="btn btn-primary" onClick={this.handleOnClick} >Confirm</button>
                    </div>

                    <hr></hr>
                    <Courses></Courses>

                </div>
            </section>
        );
    }

}

function mapStateToProps(state, compProps) {
    // state.courses : courses è il nome dello state definito in index - recuders
    return {
        courses: state.courses
    }
}

function mapDispatchToProps() {
    /*
        se non chiamo il mapDispatchToProps
        allora questo cmponente può eseguire il dispatch con 
        this.props.dispatch(createCourse(this.state.course));
        this.props.dispatch(..action...);
    */
}

/*
    const connectFunction = connect(mapStateToProps, mapDispatchToProps);
    export default connectFunction(CoursesPage);
*/
export default connect(mapStateToProps)(CoursesPage);