/**
 * Created by zezhang on 2016/11/2.
 */
import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
    constructor() {
        this.bindActions(HomeActions);

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
    }


    onGetTwoCharactersFail(errorMessage) {
        toastr.error(errorMessage);
    }

    onVoteFail(errorMessage) {
        toastr.error(errorMessage);
    }
}

export default alt.createStore(HomeStore);