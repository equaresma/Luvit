import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './Home.css';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { CarouselProducts } from './CarouselProducts';

const Home = () => {
    return (
        <div className="containerCarouselCnt">
            <CarouselProducts />
        </div>
    );
}

export default connect()(Home);