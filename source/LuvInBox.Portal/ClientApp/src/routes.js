import React from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import AdmHome from './pages/home/adm.index';
import { AdmLogin } from './pages/login/adm.index';
import AdmProducts from './pages/product/products';
import Cart from './pages/cart';
import { Login } from './pages/login';
import { ChangePass } from './pages/user/changepass';
import { Contact } from './pages/contact/index';
import { FAQ } from './pages/contact/faq';
import { WhoWeAre } from './pages/institutional/whoweare';
import { LuvInBoxManifest } from './pages/institutional/luvinbox_manifest';
import { PrivacyPolicy } from './pages/institutional/privacy_policy';
import { ReturnPolicy } from './pages/institutional/return_policy';
import { VendorForm } from './pages/vendor/index';
import { VendorsArea } from './pages/vendor/vendors_area';
import { VendorsFAQ } from './pages/vendor/vendors_faq';
import { CustomerForm } from './pages/user/index';
import Product from './pages/product/index';
import ProductByCategory from './pages/product/productsByCateg';
import FilteredProducts from './pages/product/filteredProducts';
import PaymentSuccess from './pages/payment/success';
import PaymentFailure from './pages/payment/failure';
import PaymentPendings from './pages/payment/pendings';

import { history } from '../src/_helpers';
import util from '../src/_helpers/util';

const PrivateRoute = ({ component: Component, ...rest }) =>
(
    <Route {...rest} render={props =>
    (
        util.isAuthenticated() ? <Component {...props} /> : <Redirect to={{ pathname: '/adm/login' }} />
    )} />
);

export default function Routes() {
    return (
        <Router history={history}>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <PrivateRoute path="/adm" exact component={AdmHome} />
                    <PrivateRoute path="/adm/products" exact component={AdmProducts} />
                    <Route path="/adm/login" exact component={AdmLogin} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/login" component={Login} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/contact/faq' component={FAQ} />
                    <Route path='/institutional/whoweare' component={WhoWeAre} />
                    <Route path='/institutional/luvinbox_manifest' component={LuvInBoxManifest} />
                    <Route path='/institutional/privacy_policy' component={PrivacyPolicy} />
                    <Route path='/institutional/return_policy' component={ReturnPolicy} />
                    <Route path='/register/customer' component={CustomerForm} />
                    <Route path='/register/vendor' component={VendorForm} />
                    <Route path='/vendor_area' component={VendorsArea} />
                    <Route path='/vendor_faq' component={VendorsFAQ} />
                    <Route path="/register" component={ChangePass} />
                    <Route path="/product" component={Product} />
                    <Route path="/productsByCateg" component={ProductByCategory} />
                    <Route path="/filteredProducts" component={FilteredProducts} />
                    <Route path="/payment/success" component={PaymentSuccess} />
                    <Route path="/payment/failure" component={PaymentFailure} />
                    <Route path="/payment/pendings" component={PaymentPendings} />
                </Switch>
            </Layout>
        </Router>
    );
}
