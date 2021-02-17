import * as React from 'react';
import { connect } from 'react-redux';
import { CarouselPromo } from './carouselPromo';
import { CarouselProducts } from './carouselProducts';
import { CarouselCategory } from './carouselCategory';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './home.css';

const Home = () => {
    return (
        <div>            
            <CarouselPromo />
            <CarouselCategory />
            <CarouselProducts />
        </div>
    );
}

export default connect()(Home);