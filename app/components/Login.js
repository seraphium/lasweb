import React from 'react';
import {Link} from 'react-router';
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
        $('#myModal').modal('show')

    }

    componentWillUnmount() {
        LoginStore.unlisten(this.onChange);
    }


    onChange(state) {
        this.setState(state);
    }

    handleLogin() {
        LoginAction.handleLogin(this.props.history);
    }


    render() {
        return (
            <div className='container-fluid'>
                                <form className="form" role="form">
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="loginUsername" placeholder="User Name"></input>
                                        <input type="text" className="form-control" id="loginPassword" placeholder="Password"></input>
                                    </div>
                                    <button type="button" className="btn btn-primary" onClick={this.handleLogin.bind(this)}>Login</button>

                                </form>
                            </div>

        );
    }
}

export default Login;