/**
 * Created by zezhang on 2016/11/2.
 */
import alt from '../alt';

class HomeActions {
    constructor() {
        this.generateActions(
            'selectedUnitSuccess',
            'clearUnitSuccess'
        );
    }

    handleSelectedUnit(unitId) {
        this.actions.selectedUnitSuccess(unitId);
    }
    clearSelectedUnit() {
        this.actions.clearUnitSuccess();

    }

    handleAddUnit(param) {
        console.log("added unit parent id:" + param)
    }

}






export default alt.createActions(HomeActions);