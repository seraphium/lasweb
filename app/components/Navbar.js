/**
 * Created by jackiezhang on 2016/10/30.
 */
import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = NavbarStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        NavbarStore.listen(this.onChange);

        NavbarActions.getUserInfo(this.props.history);


        let socket = io.connect();

        socket.on('onlineUsers', (data) => {
            NavbarActions.updateOnlineUsers(data);
        });


        $(document).ajaxStart(() => {
            NavbarActions.updateAjaxAnimation('fadeIn');
        });

        $(document).ajaxComplete(() => {
            setTimeout(() => {
                NavbarActions.updateAjaxAnimation('fadeOut');
            }, 750);
        });
    }

    componentWillUnmount() {
        NavbarStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();

        let searchQuery = this.state.searchQuery.trim();

        if (searchQuery) {
            NavbarActions.findCharacter({
                searchQuery: searchQuery,
                searchForm: this.refs.searchForm,
                history: this.props.history
            });
        }
    }

    handleLogout(event) {
        NavbarActions.handleLogout({
            history: this.props.history
        } );
    }


    render() {
        return (
            <nav className='navbar navbar-default navbar-static-top'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'/>
                        <span className='icon-bar'/>
                        <span className='icon-bar'/>
                    </button>
                    <Link to='/' className='navbar-brand'>
                          <span ref='triangles' className={'triangles animated ' + this.state.ajaxAnimationClass}>
                          <div className='tri invert'></div>
                          <div className='tri invert'></div>
                          <div className='tri'></div>
                          <div className='tri invert'></div>
                          <div className='tri invert'></div>
                          <div className='tri'></div>
                          <div className='tri invert'></div>
                          <div className='tri'></div>
                          <div className='tri invert'></div>
                        </span>
                        BC3000</Link>
                </div>
                <div id='navbar' className='navbar-collapse collapse'>
                    <form ref='searchForm' className='navbar-form navbar-left animated' onSubmit={this.handleSubmit.bind(this)}>
                        <div className='input-group'>
                            <input type='text' className='form-control' placeholder={this.state.totalCharacters + ' characters'} value={this.state.searchQuery} onChange={NavbarActions.updateSearchQuery} />
                         <span className='input-group-btn'>
                             <button className='btn btn-default' onClick={this.handleSubmit.bind(this)}><span className='glyphicon glyphicon-search'></span></button>
                        </span>
                        </div>
                    </form>
                    <ul className='nav navbar-nav'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/Report'>Reports</Link></li>
                        <li><Link to='/Device'>Devices</Link></li>
                        <li><Link to='/User'>Users</Link></li>
                        <li><Link to='/Setting'>Setting</Link></li>

                    </ul>
                    <p className="navbar-text">Signed in as {this.state.loggedName}</p>
                    <button className='btn btn-default navbar-btn' onClick={this.handleLogout.bind(this)}>Logout</button>

                </div>
            </nav>
        );
    }
}

export default Navbar;