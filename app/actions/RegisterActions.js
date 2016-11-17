/**
 * Created by zezhang on 2016/11/2.
 */
import alt from '../alt';

class RegisterActions {
    constructor() {
        this.generateActions(
            'registerSuccess',
            'registerFail'
        );
    }


    register(payload) {

        let params = {
            username:  payload.username,
            password: payload.password,
            telnum: payload.telnum
        };

        $.ajax({
            type: 'POST',
            url: '/api/register', data: params})
            .done((data) => {
                if (data.result == 'true') {
                    this.actions.registerSuccess(payload);

                } else {
                    this.actions.registerFail("invalid username/password");
                }
            })
            .fail((jqXhr) => {
                this.actions.registerFail(jqXhr);
            });

    }
}

export default alt.createActions(RegisterActions);