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
        HomeActions.getTwoCharacters();
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
                    <div className="col-md-2">
                        <div className="list-group">
                            <a href="#" className="list-group-item active">Cras justo odid</a>
                            <a href="#" className="list-group-item">Dapibus ac facilisis in</a>
                            <a href="#" className="list-group-item">Morbi leo risus</a>
                            <a href="#" className="list-group-item">Porta ac consectetur ac</a>
                            <a href="#" className="list-group-item">Vestibulum at eros</a>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <span className="glyphicon glyphicon-record"></span>所有球体
                            </div>
                            <table className="table table-hover">
                                <tr>
                                    <th>名称</th>
                                    <th>状态</th>
                                    <th>照片</th>

                                </tr>
                                <tr> <td>aaa</td> <td>bbb</td><td><button className='btn btn-success'  >查看</button></td></tr>
                                <tr> <td>aaa</td> <td>bbb</td><td><button className='btn btn-danger disabled'  >获取失败</button></td></tr>
                                <tr> <td>aaa</td> <td>bbb</td><td><button className='btn btn-success'  >查看</button></td></tr>

                            </table>
                            </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Home;