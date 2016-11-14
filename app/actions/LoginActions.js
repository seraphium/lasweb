/**
 * Created by zezhang on 2016/11/2.
 */
import alt from '../alt';

class LoginActions {
    constructor() {
        this.generateActions(
            'loginSuccess',
            'loginFailed'
        );
    }


    handleLogin(logged) {
        if (logged) {
            this.actions.loginSuccess();
        } else {
            this.actions.loginFailed();
        }
    }
}

export default alt.createActions(LoginActions);