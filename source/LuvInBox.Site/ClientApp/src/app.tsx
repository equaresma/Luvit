import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/layout';
import Home from './components/home';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
    </Layout>
);
