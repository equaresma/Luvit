import * as React from 'react';
import { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';

import './carouselCategory.css';

export const CarouselCategory = () => {
    const [categs, setCategs] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 12,
            numScroll: 12
        },
        {
            breakpoint: '600px',
            numVisible: 8,
            numScroll: 8
        },
        {
            breakpoint: '480px',
            numVisible: 5,
            numScroll: 5
        }
    ];

    useEffect(() => {
        setCategs(['Acessorios.png',
                    'Ambiente_romantico.png', 
                    'Brincadeiras_Jogos.png', 
                    'Cosmeticos.png', 
                    'Fantasias.png', 
                    'Fetiche.png', 
                    'Livros.png', 
                    'Mais_vendidos.png', 
                    'Masculino.png', 
                    'Para_elas.png', 
                    'Plugs.png', 
                    'Pompoarismo.png', 
                    'Promocoes.png', 
                    'Protese.png', 
                    'Roupas_Intimas.png', 
                    'Suplementos.png', 
                    'Vibradores.png']);        
    }, []);

    const categTemplate = (categ) => {      
        return (
            <div className="promo-item">
                <div className="promo-item-content">
                    <div className="p-mb-3 withCard">
                        <img className="img-category" src={"/images/icons/" + categ} alt={categ}/>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <Carousel value={categs} numVisible={8} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                            autoplayInterval={6000} itemTemplate={categTemplate} indicatorsContentClassName="hideIndicators" />
                    </div>
                </div>
            </div>
        </div>
    );
}