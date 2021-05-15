import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

import './carouselPromo.css';

const items = [
    {
        src: '/images/promotional/manifest.png',
        altText: 'Manifesto',
        caption: '',
        header: '',
        key: '1'
    },
    {
        src: '/images/promotional/12x.png',
        altText: '12x',
        caption: '',
        header: '',
        key: '2'
    },
    {
        src: '/images/promotional/best_sellers.png',
        altText: 'Best Sellers',
        caption: '',
        header: '',
        key: '3'
    },
    {
        src: '/images/promotional/shipping.png',
        altText: 'Shipping',
        caption: '',
        header: '',
        key: '4'
    }
];

const CarouselPromo = () => {
    return (
        <div className="promoCarousel">
            <UncontrolledCarousel items={items} />
        </div>
    );
};

export default CarouselPromo;