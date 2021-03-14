import * as React from 'react';
import { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Tooltip } from 'primereact/tooltip';

import './carouselCategory.css';

export const CarouselCategory = () => {
    const [categs, setCategs] = useState([]);

    useEffect(() => {
        setCategs(['Acessorios.png',
            'Ambiente_romantico.png',
            'Brincadeiras_Jogos.png',
            'Cosmeticos.png',
            'Fantasias.png',
            'Fetiche.png',
            'Livros.png',
            'Mais_vendidos.png',
            'Para_eles.png',
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
            <div>
                <Tooltip target=".img-category" mouseTrack mouseTrackLeft={10} className="toolTip"/>
                <img className="img-category" src={"/images/categories/" + categ} alt={categ} data-pr-tooltip={categ.replace('.png', '').replace('_', ' ')}/>
            </div>
        );
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="card mCointaner">
                        <Carousel value={categs} numVisible={8} numScroll={1} className="custom-carousel" circular
                            itemTemplate={categTemplate} indicatorsContentClassName="hideIndicators" />
                    </div>
                </div>
            </div>
        </div>
    );
}