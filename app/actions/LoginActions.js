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


    handleLogin() {
        this.actions.loginSuccess();
    }
}

export default alt.createActions(LoginActions);