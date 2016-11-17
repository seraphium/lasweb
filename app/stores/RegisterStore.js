/**
 * Created by zezhang on 2016/11/2.
 */
import alt from '../alt';
import RegisterActions from '../actions/RegisterActions';
import React from 'react';

class RegisterStore
{
    constructor() {
        this.bindActions(RegisterActions);
        this.username = "";
        this.password = "";
        this.logged = false;
    }

    onUpdateUsername(data) {
        this.username = data.target.value;
    }

    onUpdatePassword(data) {
        this.password = data.target.value;
    }

    onLoginSuccess(payload) {

        payload.history.pushState(null, '/');

    }


    onLoginFail(errorMessage) {
        toastr.error(errorMessage);
    }

}

export default alt.createStore(RegisterStore);