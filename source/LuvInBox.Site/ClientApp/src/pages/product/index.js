import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { productActions } from '../../_actions';
import { Button } from 'primereact/button';
import { Trans, useTranslation } from 'react-i18next';
import './index.css';

const Product = ({ product = {}}) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const productTemplate = () => {
        if (!product)
            return (
                <div></div>
                );
        let content = (product.image.type == 1) ? "data:image/png;base64," : "";
        content += product.image.value;

        return (
            <div className="card" style={{ marginTop: "15px" }}>
                <center><h4 className="title">{product.name}</h4></center>
                <div className="image-container">
                    <img className="product" src={content} alt={product.name} onError={(e) => e.target.src = 'images/not-founded.png'} />
                </div>
                <div className="product-list-detail">
                    <div>
                        <i className="pi pi-tag product-category-icon"></i>
                        <span className="product-category">{product.category}</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        productTemplate()
    );
}

function mapStateToProps(state) {
    return {
        product: (state.reducers.products.product) ? state.reducers.products.product : null
    };
}

export default connect(mapStateToProps)(Product);
