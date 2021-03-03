import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { cartActions } from '../../_actions';
import { OrderList } from 'primereact/orderlist';
import { Button } from 'primereact/button';
import { Trans, useTranslation } from 'react-i18next';

import './index.css';

const Cart = (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    useEffect(() => {
        if (props.reload)
            dispatch(cartActions.get());
    });

    const removeProd = (item) => {
        dispatch(cartActions.removeProduct(item));
    }

    const emptyCart = () => {
        dispatch(cartActions.emptyCart());
    }

    //<span className={`product-badge status-${item.inventoryStatus.toLowerCase()}`}>{item.inventoryStatus}</span>
    const itemTemplate = (item) => {
        return (
            <div className="product-item">
                <div className="image-container">
                    <img src={`showcase/demo/images/product/${item.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="p-mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{item.category}</span>
                </div>
                <div className="product-list-action">
                    <h6 className="p-mb-2">${item.price}</h6>                    
                    <div><Button onClick={(e) => removeProd(item)} className="p-button-secondary"><Trans>lbl_remove_product</Trans></Button></div>
                </div>
            </div>
        );
    }

    return (
        <div className="card" style={{ marginTop: "25px" }}>
            <h3><Trans>lbl_cart</Trans></h3>
            <br />
            <div className="orderlist-demo">
                <div className="card">
                    <OrderList value={props.cart} header={t('lbl_list_of_products')} dragdrop listStyle={{ height: 'auto' }} dataKey="id"
                        itemTemplate={itemTemplate} ></OrderList>
                </div>
            </div>
            <div style={{marginTop: "25px"}}>
                <Button className="p-button-secondary" onClick={(e) => emptyCart()}><Trans>lbl_empty_cart</Trans></Button>
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
