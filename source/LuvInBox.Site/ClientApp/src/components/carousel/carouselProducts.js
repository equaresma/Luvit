import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { productActions, cartActions } from '../../_actions';
import { Trans } from 'react-i18next';

import './carouselProducts.css';

const CarouselProducts = ({ onLoad = () => { }, cartAdd, products = [], action = 'product', reload = true }) => {
    //const dispatch = useDispatch();

    useEffect(() => {
        //if (props.reload) {
        //    dispatch(productActions.getAll());
        //}
        if(reload)
            onLoad();
    });

    const addProd = (product) => {
        cartAdd(product, products);
    }

    const productTemplate = (product) => {
        let content = (product.image.type == 1) ? "data:image/png;base64," : "";
        content += product.image.value;

        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="p-mb-3 whiteCard">
                        <img src={content} alt={product.name} className="product-image" />
                    </div>
                    <div className="whiteCard InnerProductCard">
                        <span className="InnerProductCard_OfferCard">{product.name}</span>
                        <p>
                            <span className="InnerProductCard_OfferCard_Price">R$ {product.price}</span>
                        </p>
                        <span className={`product-badge status-${product.inventoryStatus}`}>{product.inventoryStatus}</span>
                        <div className="car-buttons p-mt-5">
                            <Button icon="pi pi-search p-button-search" className="p-button p-button-rounded p-mr-1" />
                            <Button icon="pi pi-heart" className="p-button p-button-rounded p-mr-1" />
                            <Button icon="pi pi-shopping-cart" className="p-button-help p-button-rounded" onClick={(e) => addProd(product)} />
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
                    <div className="card mContainer">
                        <center><h3 className="title"><Trans>lbl_highlighted</Trans></h3></center>
                        <Carousel value={products} numVisible={5} numScroll={1} className="custom-carousel"
                            itemTemplate={productTemplate} header={<div className="carouselTitle"><h5><Trans>lbl_highlighted</Trans></h5></div>} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    if (ownProps.action == 'product') {
        return {
            products: Array.isArray(state.reducers.products.products) ? state.reducers.products.products : new Array(),
            reload: state.reducers.products.reload,
            error: state.reducers.products.error,
            action: 'product'
        };
    } else {
        return {
            products: ownProps.products,
            reload: ownProps.action != 'cart',
            error: null,
            action: 'cart'
        };
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onLoad: () => { // handles onTodoClick prop's call here
            ownProps.action = 'product'
            dispatch(productActions.getAll())
        },
        cartAdd: (product, products) => {
            ownProps.action = 'cart'
            ownProps.products = products
            dispatch(cartActions.addProduct(product))
        }
    }
}
//export default connect(mapStateToProps)(CarouselProducts);
export default connect(mapStateToProps, mapDispatchToProps)(CarouselProducts);
