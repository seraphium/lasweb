/**
 * Created by zezhang on 2016/11/3.
 */
import alt from '../alt';
import CharacterListActions from '../actions/CharacterListActions';

class CharacterListStore {
    constructor() {
        this.bindActions(CharacterListActions);
        this.characters = [];
    }

    onGetCharactersSuccess(data) {
        this.characters = data;
    }

    onGetCharactersFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }
}

export default alt.createStore(CharacterListStore);