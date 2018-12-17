import React, { Component } from 'react';
import * as userActions from '../../actions/usersActions';
import {connect} from 'react-redux';

class ManageUser extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                userName: '',
                name: '',
                surName: ''
            },
            isloading: false
        };
    }

    componentDidMount(){
        if(isNaN(this.props.match.params.id)){
            return;
        }

        console.log("aggiornamento");
        this.setState({
            isloading: true
        });

        this.props.getUser(this.props.match.params.id);
    }

    componentWillReceiveProps(newProps){
        console.log("componentWillReceiveProps");
        this.setState({user: Object.assign({}, newProps.user), isloading: false});
    }

    handleOnClick = () => {
        this.props.create(this.state.user);
    }

    handleOnChangeUserName = (event) => {
        var user = this.state.user;
        user.userName = event.target.value;
        this.setState({
            user
        });
    }

    handleOnChangeName = (event) => {
        var user = this.state.user;
        user.name = event.target.value;
        this.setState({
            user
        });
    }

    handleOnChangeSurName = (event) => {
        var user = this.state.user;
        user.surName = event.target.value;
        this.setState({
            user
        });
    }

    render() {



        return (
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">User details</h1>

                    {
                        this.state.isloading ? 
                        <div>
                            <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                            <span>Loading...</span>
                        </div>
                        :
                        <div>
                            <p className="lead text-muted">{this.props.match.params.id} </p>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="username">username</label>
                                    <input type="text" required="required" className="form-control" id="username" placeholder="username" value={this.state.user.userName} onChange={this.handleOnChangeUserName} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">name</label>
                                    <input type="text" required="required"  className="form-control" id="name" placeholder="name" value={this.state.user.name} onChange={this.handleOnChangeName} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="surname">surname</label>
                                    <input type="text" required="required"  className="form-control" id="surname" placeholder="surname" value={this.state.user.surName} onChange={this.handleOnChangeSurName} />
                                </div>
                                
                                <button type="submit" className="btn btn-primary" onClick={this.handleOnClick} >Submit</button>
                            </div>
                        </div>
                    }

                    
                </div>
            </section>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.users.current
    };
}

function mapDispatchToProps(dispatch){
    return {
        create: (user) => dispatch(userActions.createUser(user)),
        getUser: (id) => dispatch(userActions.getUser(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUser);