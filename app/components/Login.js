import React from 'react';
import LoginStore from '../stores/LoginStore'
import LoginAction from '../actions/LoginActions';
import {first, without, findWhere} from 'underscore';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = LoginStore.getState();
        this.onChange = this.onChange.bind(this);


    }

    componentDidMount() {
        LoginStore.listen(this.onChange);

    }

    componentWillUnmount() {
        LoginStore.unlisten(this.onChange);
    }


    onChange(state) {
        this.setState(state);
    }

    handleLogin() {

        event.preventDefault();

        let userName = this.state.username;
        let password = this.state.password;

        LoginAction.handleLogin({
                    userName: userName,
                    password: password,
                    history: this.props.history
                });
    }

    handleRegister() {
        this.props.history.pushState(null, '/register');
    }


    render() {
        return (
                <form className="form" role="form">
                    <div className="input-group">
                        <input type="text" className="form-control" id="loginUsername" placeholder="User Name"
                               value={this.state.username} onChange={LoginAction.updateUsername}></input>
                        <input type="text" className="form-control" id="loginPassword" placeholder="Password"
                               value={this.state.password} onChange={LoginAction.updatePassword}></input>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.handleLogin.bind(this)}>Login</button>
                    <button type="button" className="btn btn-warning" onClick={this.handleRegister.bind(this)}>Register</button>

                </form>
        );
    }
}

export default Login;