/**
 * Created by zezhang on 2016/11/2.
 */
import alt from '../alt';

class HomeActions {
    constructor() {
        this.generateActions(
            'selectedUnitSuccess'
        );
    }

    handleSelectedUnit(unitId) {
        this.actions.selectedUnitSuccess(unitId);
    }

}



export default alt.createActions(HomeActions);