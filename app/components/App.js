/**
 * Created by jackiezhang on 2016/10/30.
 */
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

class App extends React.Component {
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