import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from'../../actions/auth';

import NavBar from '../nav-bar';
import Home from '../../routes/home';
import Login from '../../routes/login';
import News from '../../routes/news';
import Profile from '../../routes/profile';



const mapStateToProps = (state) => {
  return {
    isAuthorized: state.authReducer.isAuthorized};
};

const mapDispatchToProps = dispatch => {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
};

const App = (props) =>  {

  const {isAuthorized} = props;
  const {setAuthorization} = props.authActions;

  return (
    <div className="app">
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' render={(props) => <Login {...props} isAuthorized={isAuthorized} setAuthorization={setAuthorization} />} />
          <Route path='/news' component={News}/>
          <Route path='/profile' render={(props) => <Profile {...props} isAuthorized={isAuthorized} />} />
        </Switch>
      </Router>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
