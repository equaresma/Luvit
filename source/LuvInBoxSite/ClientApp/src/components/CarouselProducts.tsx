import * as React from 'react';
import { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import ProductService from '../service/ProductHomeService';
import './Carousel.css';

export const CarouselProducts = () => {
    const [products, setProducts] = useState([]);
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

    const productService = new ProductService();

    useEffect(() => {
        setProducts(productService.getProductsSmall().products.slice(0, 9));
        //.then(data => setProducts(Array(data).slice(0, 9)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const productTemplate = (product) => {
        console.log(product.name);

        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="p-mb-3 whiteCard">
                        <img src={'showcase/demo/images/product/${product.image}'} alt={product.name} className="product-image" />
                    </div>
                    <div className="whiteCard">
                        <h4 className="p-mb-1">{product.name}</h4>
                        <h6 className="p-mt-0 p-mb-3">${product.price}</h6>
                        <span className={`product-badge status-${product.inventoryStatus}`}>{product.inventoryStatus}</span>
                        <div className="car-buttons p-mt-5">
                            <Button icon="pi pi-search" className="p-button p-button-rounded p-mr-2" />
                            <Button icon="pi pi-star" className="p-button-success p-button-rounded p-mr-2" />
                            <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="redCard">
                    <Carousel value={products} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                        autoplayInterval={3000} itemTemplate={productTemplate} header={<div className="carouselTitle"><h5>Destaques</h5></div>} />
                </div>
            </div>
        </div>
    );
}