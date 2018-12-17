import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import './App.css';
import HeaderComponent from './pages/common/Header';
import routes from './routes';
import {connect} from 'react-redux';
class App extends Component {


  render() {

    console.log("App props");
    console.log(this.props);

    
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        this.props.isLogged
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

    return (
      <Router>
        <div>

          <HeaderComponent isLogged={this.props.isLogged} ></HeaderComponent>
          <hr />

          <div className="container-fluid">
            {
              routes.map((route, i) => 
                <Route exact key={i} path={route.path} component={route.component} ></Route>)
            }
          </div>
        
        </div>
      </Router>
      
    );
  }
}

function mapStateToProps(state){
  return {
    isLogged: state.login.isLogged
  }
}

export default connect(mapStateToProps)(App)
  