import React from 'react';
import RegisterStore from '../stores/RegisterStore'
import RegisterActions from '../actions/RegisterActions';
import {first, without, findWhere} from 'underscore';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = RegisterStore.getState();
        this.onChange = this.onChange.bind(this);


    }

    componentDidMount() {
        RegisterStore.listen(this.onChange);

    }

    componentWillUnmount() {
        RegisterStore.unlisten(this.onChange);
    }


    onChange(state) {
        this.setState(state);
    }

    handleLogin() {

        event.preventDefault();

        let userName = this.state.username;
        let password = this.state.password;

        RegisterActions.handleLogin({
                    userName: userName,
                    password: password,
                    history: this.props.history
                });
    }

    cancel() {
        this.props.history.pushState(null, '/login');
    }

    handleRegister() {

    }

    render() {
        return (
                <form className="form" role="form">
                    <h4> Register new user</h4>

                    <div className="input-group">
                        <input type="text" className="form-control" id="Username" placeholder="User Name"
                               value={this.state.userName} onChange={RegisterActions.updateUsername}></input>
                        <input type="text" className="form-control" id="Password" placeholder="Password"
                               value={this.state.password} onChange={RegisterActions.updatePassword}></input>
                        <input type="text" className="form-control" id="repeatPassword" placeholder="repeat password"
                               value={this.state.password} onChange={RegisterActions.updatePassword}></input>
                        <input type="text" className="form-control" id="telnum" placeholder="Telephone number"
                               value={this.state.password} onChange={RegisterActions.updatePassword}></input>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.handleRegister.bind(this)}>Register</button>
                    <button type="button" className="btn btn-default" onClick={this.cancel.bind(this)}>Cancel </button>

                </form>
        );
    }
}

export default Register;