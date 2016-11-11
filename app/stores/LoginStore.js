/**
 * Created by zezhang on 2016/11/2.
 */
import alt from '../alt';
import LoginActions from '../actions/LoginActions';
import React from 'react';

class LoginStore {
    constructor() {
        this.bindActions(LoginActions);
        //this.characters = [];
    }

    onLoginSuccess(data) {


    }


    onLoginFail(errorMessage) {
        toastr.error(errorMessage);
    }

}

export default alt.createStore(LoginStore);