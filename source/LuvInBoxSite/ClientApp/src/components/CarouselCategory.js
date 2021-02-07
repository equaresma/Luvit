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
        setPromos(['mao_costas.jpg', 'mulher_sorrindo.jpg', 'promocao','criança_amarelinha.jpg']);
    }, []);

    const productTemplate = (promo) => {
        switch (promo) {
            case 'promocao' :
                return (
                    <div className="promo-item">
                        <div className="promo-item-content">
                            <h2>Todos os dias no Brasil</h2>
                            <div className="row">
                                <div className="col-sm-4">
                                    <h3>+800</h3>
                                    <small>mulheres são estupradas</small>
                                </div>
                                <div className="col-sm-4">
                                    <h3>50%</h3>
                                    <small>são crianças, com até 13 anos de idade</small>
                                </div>
                                <div className="col-sm-4">
                                    <h3>+230</h3>
                                    <small>denúncias de violência doméstica são registradas</small>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="promo-item">
                        <div className="promo-item-content">
                            <div className="p-mb-3 withCard">
                                <img src={"/images/promotional/" + promo} alt={promo} className="promo-image" />
                            </div>
                        </div>
                    </div>
                );
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Carousel value={promos} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                        autoplayInterval={6000} itemTemplate={productTemplate} />
                </div>
            </div>
        </div>
    );
}