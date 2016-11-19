/**
 * Created by zezhang on 2016/11/2.
 */
import alt from '../alt';
import NavbarAction from "../actions/NavbarActions";

class LoginActions {
    constructor() {
        this.generateActions(
            "updateUsername",
            "updatePassword",
            'loginSuccess',
            'loginFail'
        );
    }


    handleLogin(payload) {
        //login logic here
        let params = {
            username:  payload.userName,
            password: payload.password
        };
        $.ajax({
            type: 'POST',
            url: '/api/login', data: params})
            .done((data) => {
                if (data.result == true) {
                    NavbarAction.updateLoggedName(params.username);

                    this.actions.loginSuccess(payload);

                } else {
                    this.actions.loginFail(data.message);
                }
            })
            .fail((jqXhr) => {
                this.actions.loginFail(jqXhr);
            });

    }
}

export default alt.createActions(LoginActions);