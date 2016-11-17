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
        $('#loginModal').modal('show')

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


    render() {
        return (

                <div className="modal fade" id="loginModal">
                    <div className="modal-dialog bs-example-modal-sm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Login</h4>
                            </div>
                            <div className="modal-body">
                                <form className="form" role="form">
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="loginUsername" placeholder="User Name"
                                               value={this.state.userName} onChange={LoginAction.updateUsername}></input>
                                        <input type="text" className="form-control" id="loginPassword" placeholder="Password"
                                               value={this.state.password} onChange={LoginAction.updatePassword}></input>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={this.handleLogin.bind(this)}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>



        );
    }
}

export default Login;