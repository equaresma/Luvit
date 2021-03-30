import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { productActions, cartActions } from '../../_actions';
import { Trans, useTranslation } from 'react-i18next';

import './carouselProducts.css';

const CarouselProducts = ({ mType = 'H', onLoad = () => { }, onLoadPromotions = () => { }, cartAdd, productInfo, products = [], action = 'product', reload = true }) => {
    const { t } = useTranslation();
    const transTitle = (mType == 'H') ? t('lbl_highlighted') : t('lbl_offPrice');
    const visibleItems = (mType == 'H') ? 5 : 3;

    useEffect(() => {
        if (reload) {
            if (mType == 'H') {
                onLoad();
            } else {
                onLoadPromotions();
            }
        }
    });

    const addProd = (product) => {
        cartAdd(product, products);
    }

    const gotoProductInfo = (product) => {
        productInfo(product, products);
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
                            <Button icon="pi pi-search p-button-search" className="p-button p-button-rounded p-mr-1" onClick={(e) => gotoProductInfo(product)} />
                            <Button icon="pi pi-heart" className="p-button p-button-rounded p-mr-1" />
                            <Button icon="pi pi-shopping-cart" className="p-button-help p-button-rounded" onClick={(e) => addProd(product)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid" style={{ marginTop: "50px", marginBottom: "25px" }}>
            <div className="row">
                <div className="col-12">
                    <center><h5 className="title">{transTitle}</h5></center>
                    <div className="card mContainer">
                        <Carousel value={products} numVisible={visibleItems} numScroll={1} className="custom-carousel"
                            itemTemplate={productTemplate} />
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
    } else if(ownProps.action == 'productProm') {
        return {
            products: Array.isArray(state.reducers.products.productPromotions) ? state.reducers.products.productPromotions : new Array(),
            reload: state.reducers.products.reload,
            error: state.reducers.products.error,
            action: 'productProm'
        };
    }else {
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
        onLoad: () => {
            ownProps.action = 'product'
            dispatch(productActions.getAll())
        },
        onLoadPromotions: () => {
            ownProps.action = 'productProm'
            dispatch(productActions.getPromotions());
        },
        cartAdd: (product, products) => {
            ownProps.action = 'cart'
            ownProps.products = products
            dispatch(cartActions.addProduct(product))
        },
        productInfo: (product, products) => {
            ownProps.action = 'product'
            ownProps.products = products
            dispatch(productActions.setSelected(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselProducts);
