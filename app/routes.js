import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Root from "./components/Root";
import Register from './components/Register';

export default (
        <Route component={Root}>
            <Route path='/login' component={Login} />
            <Route path='/register' components={Register} />
            <Route component={App}>
                <Route path='/' component={Home} />
            </Route>
        </Route>
);