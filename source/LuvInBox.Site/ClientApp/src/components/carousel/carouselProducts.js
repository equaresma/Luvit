import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { productActions } from '../../_actions';
import { cartActions } from '../../_actions';
import { Trans } from 'react-i18next';

import './carouselProducts.css';

const CarouselProducts = (props) => {
    const dispatch = useDispatch();
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
        if (props.reload)
            dispatch(productActions.getAll());
    });

    const addProd = (product) => {
        dispatch(cartActions.addProduct(product));
    }

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
                            <Button icon="pi pi-shopping-cart" className="p-button-help p-button-rounded" onClick={(e) => addProd(product)}/>
                        </div>
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
                        <Carousel value={props.products} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                            autoplayInterval={3000} itemTemplate={productTemplate} header={<div className="carouselTitle"><h5><Trans>lbl_featured</Trans></h5></div>} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        products: Array.isArray(state.products.products) ? state.products.products : new Array(),
        reload: state.products.reload,
        error: state.products.error
    };
}

export default connect(mapStateToProps)(CarouselProducts);
