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


        this.reports = [{ reportId: 0, unitId:'Ufey74JCqWQO9OhdJNNFIMp2yjWYyqkO', time:'2016-11-01 12:32:11', isAlert:true, quota: 150, hasMedia:true},
            { reportId: 1, unitId:'Ufey74JCqWQO9OhdJNNFIMp2yjWYyqkO', time:'2016-11-01 12:32:12', isAlert:true, quota: 160, hasMedia:true},
            { reportId: 2, unitId:2, time:'2016-11-01 12:32:13', isAlert:false, quota: 170, hasMedia:true},
            { reportId: 3, unitId:3, time:'2016-11-01 12:32:11', isAlert:true, quota: 180, hasMedia:true},
            { reportId: 4, unitId:3, time:'2016-11-01 12:32:15', isAlert:false, quota: 190, hasMedia:true},
            { reportId: 5, unitId:5, time:'2016-11-01 12:32:16', isAlert:true, quota: 200, hasMedia:true},
            { reportId: 6, unitId:6, time:'2016-11-01 12:32:18', isAlert:true, quota: 210, hasMedia:true}]

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