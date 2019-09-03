import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';

import Login from '../routes/Login';
import Register from '../routes/Register';
import Home from '../routes/Home';

import { UserIsAuthenticated } from '../hoc/authentication';

class App extends Component {
    render() {
        return (
            <Router>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/home'>Home</Link>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/home' component={UserIsAuthenticated(Home)}></Route>
            </Router>
        )
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;