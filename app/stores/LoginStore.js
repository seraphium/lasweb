/**
 * Created by zezhang on 2016/11/2.
 */
import alt from '../alt';
import LoginActions from '../actions/LoginActions';
import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import routes from '../routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';

class LoginStore {
    constructor() {
        this.bindActions(LoginActions);
        //this.characters = [];
    }

    onLoginSuccess(data) {

        let history = createBrowserHistory();

        ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));
    }


    onLoginFail(errorMessage) {
        toastr.error(errorMessage);
    }

}

export default alt.createStore(LoginStore);