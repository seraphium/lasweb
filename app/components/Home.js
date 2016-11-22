import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';
import {first, without, findWhere} from 'underscore';

class Home extends React.Component {

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

    handleClick(character) {
        var winner = character.characterId;
        var loser = first(without(this.state.characters, findWhere(this.state.characters, { characterId: winner }))).characterId;
        HomeActions.vote(winner, loser);
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-md-3">
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
                    </div>
                    <div className="col-md-9">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                球体名称
                            </div>
                            <table className="table table-hover">
                                <tbody>
                                <tr>
                                    <th>名称</th>
                                    <th>状态</th>
                                    <th>照片</th>
                                </tr>
                                <tr> <td>aaa</td> <td>bbb</td><td><button className='btn btn-success'  >查看</button></td></tr>
                                <tr> <td>aaa</td> <td>bbb</td><td><button className='btn btn-danger disabled'  >获取失败</button></td></tr>
                                <tr> <td>aaa</td> <td>bbb</td><td><button className='btn btn-success'  >查看</button></td></tr>


                                </tbody>
                            </table>
                            </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Home;