/**
 * Created by jackiezhang on 2016/10/30.
 */
import alt from '../alt';
import NavbarActions from '../actions/NavbarActions';

class NavbarStore {
    constructor() {
        this.bindActions(NavbarActions);
        this.totalCharacters = 0;
        this.loggedName = "";
        this.searchQuery = '';
        this.ajaxAnimationClass = '';
    }



    onUpdateAjaxAnimation(className) {
        this.ajaxAnimationClass = className; //fadein or fadeout
    }

    onUpdateLoggedName(name) {
        this.loggedName = name;
    }

    onGetUserinfoSucceed(data) {
        this.loggedName = data.username;
    }

    onLogoutSuccess(payload) {
        payload.history.pushState(null, '/login');

    }

}

export default alt.createStore(NavbarStore);