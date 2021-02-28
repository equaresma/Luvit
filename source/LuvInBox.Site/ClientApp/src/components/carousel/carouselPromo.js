import * as React from 'react';
import { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';

import './carouselPromo.css';

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
        setPromos(['manifest', 'shipping', 'best_sellers', '12x']);
    }, []);

    const productTemplate = (promo) => {
        const imgSet = `/images/promotional/${promo}-small.png 320w, /images/promotional/${promo}-medium.png 800w, /images/promotional/${promo}-large.png 1200w`;
        return (
            <div className="promo-item">
                <div className="promo-item-content">
                    <div className="p-mb-3 withCard">
                        <picture>
                            <source
                                srcSet={imgSet}
                                sizes="(min-width: 60rem) 80vw, (min-width: 40rem) 90vw, 100vw" />

                            <img src={"/images/promotional/" + promo + "-small.png"} alt={promo} />
                        </picture>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Carousel value={promos} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                        autoplayInterval={8000} itemTemplate={productTemplate} indicatorsContentClassName="hideIndicators" />
                </div>
            </div>
        </div>
    );
}