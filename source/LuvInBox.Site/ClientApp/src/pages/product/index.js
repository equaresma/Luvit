import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { cartActions, categoryActions } from '../../_actions';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';
import { history } from '../../_helpers';
import ProductImage from '../../components/product/image';

import './index.css';

const Product = ({ product = null, category = null }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(categoryActions.getById(product.categoryId));
    }, []);

    const back = () => {
        history.push('/');
    }
    const addCart = (product) => {
        dispatch(cartActions.addProduct(product))
    }

    const productTemplate = () => {
        if (!product)
            return (
                <div></div>
            );

        return (
            <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-4">
                    <center>
                        <div className="image-container">
                            <ProductImage image={product.image} className={"product"} />
                        </div>
                    </center>
                </div>
                <div className="col-8">
                    <h4 className="title">{product.name}</h4>
                    <hr /><br />
                    <div className="product-list-detail">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">{category.name}</span><br />
                            <strong><span>R$ {product.price}</span></strong><br />
                            <small><span style={{ textDecoration: "line-through" }}>R$ {product.off}</span><br /></small>
                            <strong><span>R$ {product.offPrice}</span></strong><br />
                        </div>
                        <hr />
                        <div>
                            Código de Barras:<br /> <span style={{ fontFamily: "BarcodeFont", fontSize: "64px" }}>{product.barCode}</span>
                        </div>
                        <div>
                            <span>Referência: </span>{product.reference}
                        </div>
                        <div>
                            <span>Descrição: </span>{product.description}
                        </div>
                        <hr /><br />
                        <h3>Dimensão:</h3><br />
                        <div>
                            <div>
                                <span>Comprimento: </span>{product.dimension.length}
                            </div>
                            <div>
                                <span>Largura: </span>{product.dimension.width}
                            </div>
                            <div>
                                <span>Altura: </span>{product.dimension.height}
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <Button label={t('lbl_back')} icon="pi pi-backward" className="p-button-help p-button" onClick={(e) => back()} />
                    <Button label={t('lbl_add')} icon="pi pi-shopping-cart" className="p-button-help p-button" onClick={(e) => addCart(product)} style={{ marginLeft: "10px" }} />
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
        product: (state.reducers.products.product) ? state.reducers.products.product : null,
        category: (state.reducers.category.category) ? state.reducers.category.category : {}
    };
}

export default connect(mapStateToProps)(Product);
