import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';
import {first, without, findWhere} from 'underscore';
import Sidebar from './Sidebar';
import History from './History';

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
                      <Sidebar> </Sidebar>
                    </div>
                    <div className="col-md-9">
                        <History></History>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;