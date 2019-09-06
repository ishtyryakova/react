import React, { useState }  from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from '../nav-bar';
import Home from '../../routes/home';
import Login from '../../routes/login';
import News from '../../routes/news';
import Profile from '../../routes/profile';


const App = () =>  {
  const [isAuthorized, setAuthorization] = useState(false);
  return (
    <div className="app">
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' render={(props) => <Login {...props} isAuthorized={isAuthorized} setAuthorization={setAuthorization}/>} />
          <Route path='/news' component={News}/>
          <Route path='/profile' render={(props) => <Profile {...props} isAuthorized={isAuthorized} />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
