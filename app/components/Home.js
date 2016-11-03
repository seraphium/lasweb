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
                        <h2>Sidebar</h2>
                    </div>
                    <div className="col-md-10">
                        <h2>列表信息</h2>
                        <table className="table table-hover">
                            <tr>
                                <th>名称</th>
                                <th>状态</th>
                            </tr>
                            <tr> <td>aaa</td> <td>bbb</td></tr>
                            <tr> <td>aaa</td> <td>bbb</td></tr>
                            <tr> <td>aaa</td> <td>bbb</td></tr>

                        </table>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;