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

    }



    onRegisterSuccess(payload) {

        payload.history.pushState(null, '/login');

    }


    onRegisterFail(errorMessage) {
        toastr.error(errorMessage);
    }

}

export default alt.createStore(RegisterStore);