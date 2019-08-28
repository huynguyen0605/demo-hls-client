import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from '../routes/Login';
import Register from '../routes/Register';
import Home from '../routes/Home';

import {UserIsAuthenticated} from '../hoc/authentication';

class App extends Component {
    render() {
        return (
            <Router>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/home' component={UserIsAuthenticated(Home)}></Route>
            </Router>
        )
    }
}

export default App;