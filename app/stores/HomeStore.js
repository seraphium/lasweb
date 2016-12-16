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

        this.reports = [{ Id: 0, unitId:'Ufey74JCqWQO9OhdJNNFIMp2yjWYyqkO', Time:'2016-11-01 12:32:11',  IsAlert:true, Quota: 150, HasMedia:true},
            { Id: 1, unitId:'Ufey74JCqWQO9OhdJNNFIMp2yjWYyqkO', Time:'2016-11-01 12:32:11',  IsAlert:true, Quota: 150, HasMedia:true},
            { Id: 2, unitId:'XbLA4aZ4tQG6UXoHjelULj71pbZWNSPg', Time:'2016-11-01 12:32:11',  IsAlert:true, Quota: 150, HasMedia:true}];

    }

    onClearUnitSuccess() {
        this.selectedUnit = null;
    }

    onSelectedUnitSuccess(param) {
        this.selectedUnit = first(this.units.filter(u => u.Id == param));
    }

    onUpdateSuccess(){
        HomeActions.fetchUnit({type: "unit"});

    }

    onUpdateFailed(errorMessage){
        toastr.error(errorMessage);

    }

    onFetchSuccess(data){
        if  (data.type == "unit"){
            this.units = data.objects;

        }
    }

    onFetchFailed(errorMessage){
        toastr.error(errorMessage);

    }
}

export default alt.createStore(HomeStore);