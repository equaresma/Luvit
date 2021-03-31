import React from 'react';
import CarouselPromo from '../../components/carousel/carouselPromo';
import CarouselProducts from '../../components/carousel/carouselProducts';
import CarouselCategory from '../../components/carousel/carouselCategory';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-light-deeppurple/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './index.css';
import '../../index.css';

const Home = () => {
    return (
        <div>
            <CarouselPromo />
            <CarouselCategory />
            <CarouselProducts mType='H' />
            <CarouselProducts mType='O' />
        </div>
    );
}

export default Home;
