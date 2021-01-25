import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import { WhoWeAre } from './components/institutional/whoweare';
import { VendorForm } from './components/register/stepVendor/VendorForm';
import { CustomerForm } from './components/register/stepCustomer/CustomerForm';

import  VendorUI  from './components/register/VendorUI';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/institutional/whoweare' component={WhoWeAre} />
        <Route path='/register/vendor' component={VendorForm} />
        <Route path='/register/vendorUI' component={VendorUI} />
        <Route path='/register/customer' component={CustomerForm} />
    </Layout>
);
