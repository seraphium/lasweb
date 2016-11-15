import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Root from "./components/Root";

export default (
        <Route component={Root}>
            <Route path='/login' component={Login} />
            <Route component={App}>
                <Route path='/' component={Home} />
            </Route>
        </Route>
);