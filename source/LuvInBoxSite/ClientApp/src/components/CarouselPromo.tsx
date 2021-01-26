import * as React from 'react';
import { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';

import './CarouselPromo.css';

export const CarouselPromo = () => {
    const [promos, setPromos] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        setPromos(['manifesto.jpg', 'promocao-frete.jpg', 'promocao-verao.jpg']);
    }, []);

    const productTemplate = (promo) => {
        return (
            <div className="promo-item">
                <div className="promo-item-content">
                    <div className="p-mb-3 whiteCard">
                        <img src={"/images/promotional/" + promo} alt={promo} className="promo-image" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="card">
                    <Carousel value={promos} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                        autoplayInterval={6000} itemTemplate={productTemplate} />
                </div>
            </div>
        </div>
    );
}