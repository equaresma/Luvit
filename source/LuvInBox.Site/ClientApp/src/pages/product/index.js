import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { cartActions } from '../../_actions';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';
import { history } from '../../_helpers';
import './index.css';

const Product = ({ product = {} }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

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
        let content = (product.image.type == 1) ? "data:image/png;base64," : "";
        content += product.image.value;

        return (
            <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-4">
                    <center>
                        <div className="image-container">
                            <img className="product" src={content} alt={product.name} onError={(e) => e.target.src = 'images/not-founded.png'} />
                        </div>
                    </center>
                </div>
                <div className="col-8">
                    <h4 className="title">{product.name}</h4>
                    <hr /><br />
                    <div className="product-list-detail">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">{product.category}</span><br />
                            <strong><span>R$ {product.price}</span></strong><br />
                            <small><span style={{ textDecoration: "line-through" }}>R$ {product.off}</span><br /></small>
                            <strong><span>R$ {product.offPrice}</span></strong><br />
                        </div>
                        <hr /><br />
                        <div>
                            <span>Código de Barras: </span>{product.barCode}
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
                    <Button label={t('lbl_add')} icon="pi pi-shopping-cart" className="p-button-help p-button" onClick={(e) => addCart(product)} style={{ marginLeft: "10px"}}/>
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
