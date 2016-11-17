/**
 * Created by zezhang on 2016/11/2.
 */
import alt from '../alt';

class LoginActions {
    constructor() {
        this.generateActions(
            "updateUsername",
            "updatePassword",
            'loginSuccess',
            'loginFailed'
        );
    }


    handleLogin() {
        //login logic here


        if (true) {
            this.actions.loginSuccess();
        } else {
            this.actions.loginFailed();
        }
    }
}

export default alt.createActions(LoginActions);