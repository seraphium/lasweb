/**
 * Created by zezhang on 2016/11/2.
 */
import alt from '../alt';
import HomeActions from '../actions/HomeActions';
import {first, without, findWhere} from 'underscore';

class HomeStore {
    constructor() {
        this.bindActions(HomeActions);

        this.selectedUnit = null;

        this.units = [];
        this.reports = [];

    }

    onClearUnitSuccess() {
        this.selectedUnit = null;
    }

    onSelectedUnitSuccess(param) {
        this.selectedUnit = first(this.units.filter(u => u.Id == param));
    }

    onUpdateSuccess(){
        HomeActions.fetchUpdatedData({type: "unit"});

    }

    onUpdateFailed(errorMessage){
        toastr.error(errorMessage);

    }

    onFetchSuccess(data){
        if  (data.type == "unit"){
            this.units = data.objects;
            let unitIDs =  this.units.filter(u => u.Type == 1).map(u => u.Id);

            HomeActions.fetchUpdatedData({type: "report", unitIDs: unitIDs});

        }

        if  (data.type == 'report') {
            this.reports = data.objects;

        }
    }

    onFetchFailed(errorMessage){
        toastr.error(errorMessage);

    }
}

export default alt.createStore(HomeStore);