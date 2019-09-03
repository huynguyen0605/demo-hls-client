import React, { Component } from 'react';
import './Login.scss';

import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="card card-container">
                    <div className="card-header">Login</div>
                    <div className="card-body-wrapper">
                        <div className="card-body">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Username" id="username"></input>
                                <div className='separator'></div>
                                <input type="password" className="form-control" placeholder="Password" id="password"></input>
                                <div className='separator'></div>
                                <div className="btn-container">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}