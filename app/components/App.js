/**
 * Created by jackiezhang on 2016/10/30.
 */
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import LoginStore from '../stores/LoginStore'


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = LoginStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        LoginStore.listen(this.onChange);
    }

    componentWillUnmount() {
        LoginStore.unlisten(this.onChange);
        $(document.body).removeClass();
    }

    onChange(state) {
        this.setState(state);
    }

    render() {

        return (
            <div>
                <Navbar history={this.props.history} />
        {this.props.children}
        <Footer />
        </div>
        );
    }
}

export default App;