/**
 * Created by zezhang on 2016/11/2.
 */
import alt from '../alt';
import Common from '../common';

class RegisterActions {
    constructor() {
        this.generateActions(
            'registerSuccess',
            'registerFail'
        );
    }


    register(payload) {
        let backendId = Common.getRandomId();
        let productId = "test";

        let admin = {
            Name:  payload.username,
            Password: payload.password,
            PhoneNum: payload.telnum,
            Dept: "123",
            Id: Common.getRandomId(),
            Line: "123",
            Permission: 1,
            Remark: "123",
            BackendId: backendId
        };
        let param = {
            backendId: backendId,
            productId: productId,
            objects: [admin]
        };


        $.ajax({
            type: 'POST',
            url: '/api/register',
            data: JSON.stringify(param),
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8'
        })
            .done((data) => {
                if (data.result == true) {
                    this.actions.registerSuccess(payload);

                } else {
                    this.actions.registerFail(data.message);
                }
            })
            .fail((jqXhr) => {
                this.actions.registerFail(jqXhr);
            });

    }
}

export default alt.createActions(RegisterActions);