import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore';
import HomeActions from '../actions/HomeActions';

import {first, without, findWhere} from 'underscore';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
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

    render() {

        var parentList = this.state.units.filter((unit) => { return unit.type == 0 }).map((parent, index) => {
            var childList = this.state.units.filter((unit) => { return unit.type == 1 && unit.parentId == parent.unitId }).map((child, index) => {
               return (<a href="#" key={child.unitId} className="list-group-item" onClick={this.handleSelect.bind(this, child.unitId)}>{child.name}</a>);

            });


            return (
                <div className="panel panel-default" key={parent.name}>
                    <div className="panel-heading" role="tab" id={"heading"+parent.unitId}>
                        <h4 className="panel-title">
                            <div className="input-group">
                                <a data-toggle="collapse" data-parent="#accordion" href={"#collapse"+parent.unitId} aria-expanded="true" aria-controls={"collapse"+parent.unitId}>
                                    {parent.name}
                                </a>
                                <button className='btn btn-default btn-sm pull-right' key={parent.name}>添加球体</button>
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

        return (<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
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

        );


    }
}

export default Sidebar;