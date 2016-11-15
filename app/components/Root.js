/**
 * Created by jackiezhang on 2016/10/30.
 */
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import LoginStore from '../stores/LoginStore'


class Root extends React.Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        $(document.body).removeClass();
    }

    onChange(state) {
        this.setState(state);
    }

    render() {

        return (
            <div>
             {this.props.children}
        </div>
        );
    }
}

export default Root;