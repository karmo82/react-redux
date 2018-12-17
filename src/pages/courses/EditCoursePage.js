import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions  from '../../actions/courseActions';

class EditCoursePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            selected: null,
            isLoading: true
        };
    }

    handleOnChange = (event) => {
        var selected = this.state.selected;

        selected.title = event.target.value;

        this.setState({
            selected
        });
    }
    
    handleOnClick = () => {
        this.props.updateCourse(this.state.selected, this.props.match.params.id);
        this.props.history.push('/courses');
    }

    render() {

        var inputCourse = <div>
                        </div>

        if(!this.state.isLoading)
        {
            inputCourse = <div>
                            <input type="text" className="form-control" value={this.state.selected.title} onChange={this.handleOnChange} />   
                            <button className="btn btn-primary" onClick={this.handleOnClick} >Confirm</button>
                        </div>
        }

        return (
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Course Details</h1>
                    <p className="lead text-muted">id: {this.props.match.params.id}</p>
                    
                    <label>Course title</label>
                    {
                        this.state.isLoading ?
                        <div>
                            <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                            <span>Loading...</span>
                        </div>
                        :
                        inputCourse                                            
                    }
                    
                </div>
            </section>
        );
    }

    componentDidMount(){
        console.log("did mount");
        this.setState({
            isLoading: true
        });
        this.props.getCourse(this.props.match.params.id);
    }

    componentWillReceiveProps(newProps){
        this.setState({
            selected: newProps.selectedCourse,
            isLoading: false
        });
    }
}

function mapStateToProps(state) {
    return {
        selectedCourse: state.courses.selected
    };
}

function mapDispatchToProps(dispatch){
    return {
        getCourse: (index) => dispatch(courseActions.getCourse(index)),
        updateCourse: (course, index) => dispatch(courseActions.updateCourse(course, index))
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(EditCoursePage);