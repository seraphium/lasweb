import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
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


    render() {
        return (
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
                                        <a data-parent="#accordion" href="#all">
                                            全部</a>
                                    </h4>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            北京
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                        <div className="list-group">
                                            <a href="#"  className="list-group-item">Cras justo odio</a>
                                            <a href="#"  className="list-group-item">Dapibus ac facilisis in</a>
                                            <a href="#"  className="list-group-item">Morbi leo risus</a>
                                            <a href="#"  className="list-group-item">Porta ac consectetur ac</a>
                                            <a href="#"  className="list-group-item">Vestibulum at eros</a>
                                        </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                    <h4 className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            上海
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <a href="#"  className="list-group-item">Cras justo odio</a>
                                    <a href="#"  className="list-group-item">Dapibus ac facilisis in</a>
                                    <a href="#"  className="list-group-item">Morbi leo risus</a>
                                    <a href="#"  className="list-group-item">Porta ac consectetur ac</a>
                                    <a href="#"  className="list-group-item">Vestibulum at eros</a>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingThree">
                                    <h4 className="panel-title">
                                        <a  data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                            广州
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <div className="list-group">
                                        <a href="#"  className="list-group-item">Cras justo odio</a>
                                        <a href="#"  className="list-group-item">Dapibus ac facilisis in</a>
                                        <a href="#"  className="list-group-item">Morbi leo risus</a>
                                        <a href="#"  className="list-group-item">Porta ac consectetur ac</a>
                                        <a href="#"  className="list-group-item">Vestibulum at eros</a>
                                    </div>
                                </div>
                            </div>
                        </div>

        );
    }
}

export default Sidebar;