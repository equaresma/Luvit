import * as React from 'react';
import { connect } from 'react-redux';
import NavMenu from './NavMenu';
import NavFooter from './NavFooter';
import { CarouselPromo } from './CarouselPromo';
import { CarouselProducts } from './CarouselProducts';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './Home.css';

const Home = () => {
    return (
        <div>
            <NavMenu />
            <CarouselPromo />
            <CarouselProducts />
            <NavFooter />
        </div>
    );
}

export default connect()(Home);