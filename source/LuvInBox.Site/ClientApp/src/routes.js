import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import { Login } from './pages/login';
import { ChangePass } from './pages/user/changepass';
import { WhoWeAre } from './components/institutional/whoweare';
import { VendorForm } from './pages/vendor/index';
import { CustomerForm } from './pages/user/index';

import { history } from '../src/_helpers/history';

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cart" component={Cart} />
                <Route path="/login" component={Login} />
                <Route path='/institutional/whoweare' component={WhoWeAre} />
                <Route path='/register/customer' component={CustomerForm} />
                <Route path='/register/vendor' component={VendorForm} />
                <Route path="/register" component={ChangePass} />
            </Switch>
        </Router>
    );
}
