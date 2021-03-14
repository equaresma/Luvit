import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { cartActions } from '../../_actions';
import { OrderList } from 'primereact/orderlist';
import { Button } from 'primereact/button';
import { Trans, useTranslation } from 'react-i18next';

import './index.css';

const Cart = (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (products.length != props.cart.length)
            setProducts(props.cart);

        if (props.reload) {
            dispatch(cartActions.get());
        }
    });

    const removeProd = (item) => {
        dispatch(cartActions.removeProduct(item));
    }

    const emptyCart = () => {
        dispatch(cartActions.empty());
    }

    const setValue = e => {
        setProducts(e.value);
    }

    const itemTemplate = (item) => {
        let content = (item.image.type == 1) ? "data:image/png;base64," : "";
        content += item.image.value;

        return (
            <div className="product-item">
                <div className="image-container">
                    <img src={content} alt={item.name} onError={(e) => e.target.src = 'images/not-founded.png'} />
                </div>
                <div className="product-list-detail">
                    <span>{item.name}</span>
                    <div>
                        <i className="pi pi-tag product-category-icon"></i>
                        <span className="product-category">{item.category}</span>
                    </div>
                </div>
                <div className="product-list-action">
                    <span>R$ {item.price}</span>
                    <div><Button onClick={(e) => removeProd(item)} className="p-button-secondary" icon="pi pi-trash" iconPos="left" tooltip={t('lbl_remove_product')}></Button></div>
                </div>
            </div>
        );
    }

    return (
        <div className="card" style={{ marginTop: "15px" }}>
            <center><h4 className="title"><Trans>lbl_cart</Trans></h4></center>
            <div className="orderlist-demo">
                <div className="card">
                    <OrderList value={products} header={t('lbl_list_of_products')} dragdrop listStyle={{ height: 'auto' }} dataKey="id"
                        itemTemplate={itemTemplate} onChange={(e) => setValue(e)}></OrderList>

                    <div style={{ marginTop: "30px", marginLeft: "70px" }}>
                        <Button className="p-button-secondary" onClick={(e) => emptyCart()}><small><Trans>lbl_empty_cart</Trans></small></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    let jcart = JSON.parse(localStorage.getItem('cart'));
    if (jcart) {
        return {
            cart: jcart,
            reload: false
        }
    } else {
        return {
            cart: Array.isArray(state.cart.cart) ? state.cart.cart : new Array(),
            reload: true,
            error: state.products.error
        }
    }
}

export default connect(mapStateToProps)(Cart);
