import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Login from './views/Login';
import Signup from './views/Signup';
import Dashboard from './views/Dashboard';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/signup" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
