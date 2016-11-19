/**
 * Created by jackiezhang on 2016/10/30.
 */
import alt from '../alt';
import {assign} from 'underscore';

class NavbarActions {
    constructor() {
        this.generateActions(
           'updateLoggedName',
            'logoutSuccess',
            'logoutFailed',
            'updateAjaxAnimation',

        );
    }

    handleLogout(payload) {
       /* $.ajax({
            type: 'POST',
            url: '/api/logout', data: params})
            .done((data) => {
                if (data.result == true) {
                    this.actions.logoutSuccess(payload);

                } else {
                    this.actions.logoutFailed(data.message);
                }
            })
            .fail((jqXhr) => {
                this.actions.logoutFailed(jqXhr);
            });*/

        this.actions.logoutSuccess(payload);
    }
}

export default alt.createActions(NavbarActions);