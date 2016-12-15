import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore';
import HomeActions from '../actions/HomeActions';

import {first, without, findWhere} from 'underscore';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.selectedParentId = null;
        this.state = HomeStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        HomeStore.listen(this.onChange);

    }

    componentWillUnmount() {
        HomeStore.unlisten(this.onChange);
    }


    onChange(state) {
        this.setState(state);
    }


    handleSelect(param) {
        HomeActions.handleSelectedUnit(param);
    }


    clearSelect(param) {
        HomeActions.clearSelectedUnit();
    }

    handleSelectedUnitAddClick(parentId) {

        $('#addUnitModal').modal('show');

        this.selectedParentId = parentId;


    }

    submitAddUnit(){
        $('#addUnitModal').modal('hide');

        let unit = {
            ParentId: this.selectedParentId,
            Type: 0,
            Name: $('#unitName')[0].value,
            Status: 0,
            Location: $('#unitLocation')[0].value,
        };
        let param = {
            type: "unit",
            objects: [unit]
        };
        HomeActions.handleAddUnit(param);
    }


    render() {


        var parentList = this.state.units.filter((unit) => { return unit.type == 0 }).map((parent, index) => {
            var childList = this.state.units.filter((unit) => { return unit.type == 1 && unit.parentId == parent.unitId }).map((child, index) => {
               return (<a href="#" key={child.unitId} className="list-group-item" onClick={this.handleSelect.bind(this, child.unitId)}>{child.name}</a>);

            });


            return (


                <div className="panel panel-default" key={parent.unitId}>
                    <div className="panel-heading" role="tab" id={"heading"+parent.unitId}>
                        <h4 className="panel-title">
                            <div className="input-group">
                                <a data-toggle="collapse" data-parent="#accordion" href={"#collapse"+parent.unitId} aria-expanded="true" aria-controls={"collapse"+parent.unitId}>
                                        {parent.name}
                                    </a>
                                <button className='btn btn-default btn-sm sidebarHorizontalRight' key={parent.name}
                                        onClick={this.handleSelectedUnitAddClick.bind(this, parent.unitId)}>添加球体</button>
                            </div>
                        </h4>
                    </div>
                    <div id={"collapse"+parent.unitId} className="panel-collapse collapse" role="tabpanel" aria-labelledby={"heading"+parent.unitId}>
                        <div className="list-group">
                            {childList}
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div>
                <div className="modal fade" id="addUnitModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加球体</h4>
                            </div>
                            <div className="modal-body">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="unitName" placeholder="Unit Name"></input>
                                    <input type="text" className="form-control" id="unitLocation" placeholder="Location"></input>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
                                <button type="button" className="btn btn-primary" onClick={this.submitAddUnit.bind(this)}>保存</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div><h4>球体列表</h4></div>
                    <form className="form-horizontal" role="form">
                        <div className="input-group">
                            <input type="text" className="form-control" id="exampleInputEmail2" placeholder="Enter Name"></input>
                            <span className="input-group-btn">
                                    <button type="submit" className="btn btn-default"><span className="glyphicon glyphicon-search"></span> </button>
                                    </span>
                        </div>
                    </form>
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingOne">
                            <h4 className="panel-title">
                                <a data-parent="#accordion" href="#all" onClick={this.clearSelect.bind(this)}>
                                    全部</a>
                            </h4>
                        </div>
                    </div>
                    {parentList}
                </div>
            </div>


        );


    }
}

export default Sidebar;