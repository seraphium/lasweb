/**
 * Created by zezhang on 2016/11/2.
 */
import alt from '../alt';

class HomeActions {
    constructor() {
        this.generateActions(
            'selectedUnitSuccess',
            'clearUnitSuccess',
            'updateSuccess',
            'updateFailed'
        );
    }

    handleSelectedUnit(unitId) {
        this.actions.selectedUnitSuccess(unitId);
    }
    clearSelectedUnit() {
        this.actions.clearUnitSuccess();

    }

    handleAddUnit(param) {
        $.ajax({
                type: 'POST',
                url: '/api/sendupdate',
                data: JSON.stringify(param),
                dataType: 'json',
                contentType: 'application/json; charset=UTF-8'
        })
            .done((data) => {
                this.actions.updateSuccess(data)
            })
            .fail((jqXhr) => {
                this.actions.updateFailed(jqXhr)
            });
    }

}






export default alt.createActions(HomeActions);