/**
 * Created by zezhang on 2016/11/2.
 */
import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
    constructor() {
        this.bindActions(HomeActions);

        this.selectedUnitId = -1;

        this.units = [{unitId: '1',
            parentId: null,
            type: 0, name:'北京',
            location: "Beijing",
            status: 0},
            {unitId: '2',
            parentId: 1,
            type: 1, name:'unit1',
            location: "Beijing",
            status: 0},
            {unitId: '3',
                parentId: 1,
                type: 1, name:'unit2',
                location: "Beijing",
                status: 0}
            ,
            {unitId: '4',
                parentId: null,
                type: 0, name:'上海',
                location: "Beijing",
                status: 0}
            ,
            {unitId: '5',
                parentId: 4,
                type: 1, name:'unit3',
                location: "Shanghai",
                status: 0},
            {unitId: '6',
                parentId: 4,
                type: 1, name:'unit4',
                location: "Shanghai",
                status: 0}];

        this.reports = [{ reportId: 0, unitId:2, time:'2016-11-01 12:32:11', isAlert:true, quota: 150, hasMedia:true},
            { reportId: 1, unitId:2, time:'2016-11-01 12:32:12', isAlert:true, quota: 150, hasMedia:true},
            { reportId: 2, unitId:2, time:'2016-11-01 12:32:13', isAlert:true, quota: 150, hasMedia:true},
            { reportId: 3, unitId:3, time:'2016-11-01 12:32:11', isAlert:true, quota: 150, hasMedia:true},
            { reportId: 4, unitId:3, time:'2016-11-01 12:32:15', isAlert:true, quota: 150, hasMedia:true},
            { reportId: 5, unitId:5, time:'2016-11-01 12:32:16', isAlert:true, quota: 150, hasMedia:true},
            { reportId: 6, unitId:6, time:'2016-11-01 12:32:18', isAlert:true, quota: 150, hasMedia:true}]


    }

    onSelectedUnitSuccess(param) {
        this.selectedUnitId = param;
    }

    onGetTwoCharactersFail(errorMessage) {
        toastr.error(errorMessage);
    }

    onVoteFail(errorMessage) {
        toastr.error(errorMessage);
    }
}

export default alt.createStore(HomeStore);