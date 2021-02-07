import * as React from 'react';
import { connect } from 'react-redux';
import { CarouselPromo } from './CarouselPromo';
import { CarouselProducts } from './CarouselProducts';
import { CarouselCategory } from './CarouselCategory';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './Home.css';

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