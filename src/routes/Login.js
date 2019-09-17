import React, { Component } from 'react';
import './Login.scss';

import { accountService } from '../services';
import {default as Toast} from '../utils/ToastUtils';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const INPUT_TYPE = {
    EMAIL: 'email',
    PASSWORD: 'password',
};
class Login extends Component {
    state = {
        email: '',
        password: '',
    };
    
    handleLogin = () => {
        accountService.login({
            email: this.state.email,
            password: this.state.password,
        }).then(result => {
            this.props.loginSuccess();
            Toast.success('Login thành công!');
            return;
        }).catch (error => {
            Toast.errorApi(error.message);
            return;
        })
    };
    onChange = type => e => {
        if (type === INPUT_TYPE.EMAIL) {
            this.setState({
                email: e.target.value,
            })
        } else if (type === INPUT_TYPE.PASSWORD) {
            this.setState({
                password: e.target.value,
            })
        }
    };
    render() {
        return (
            <div className="container">
                <div className="card card-container">
                    <div className="card-header">Login</div>
                    <div className="card-body-wrapper">
                        <div className="card-body">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.onChange(INPUT_TYPE.EMAIL)}></input>
                                <div className='separator'></div>
                                <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.onChange(INPUT_TYPE.PASSWORD)}></input>
                                <div className='separator'></div>
                                <div className="btn-container">
                                    <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>
                                </div>
                            </div>
                            <div className="register-container">
                                <Link to='/register'>Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginSuccess: () => dispatch(actions.loginSuccess()),
    };
};

export default connect(null, mapDispatchToProps) (Login);