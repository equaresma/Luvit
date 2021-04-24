import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { cartActions } from '../../_actions';
import { OrderList } from 'primereact/orderlist';
import { Button } from 'primereact/button';
import { Trans, useTranslation } from 'react-i18next';
import ProductImage from '../../components/product/image';

import './index.css';

const Cart = (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const [products, setProducts] = useState([]);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        if (products.length != props.cart.length)
            setProducts(props.cart);

        if (props.reload) {
            dispatch(cartActions.get());
            calculate();            
        }

        if(props.isCheckingout)
            renderScript();
    });

    const removeProd = (item) => {
        dispatch(cartActions.removeProduct(item));
        calculate();
    }

    const emptyCart = () => {
        dispatch(cartActions.empty());
        calculate();
    }

    const setValue = e => {
        setProducts(e.value);
    }

    const calculate = () => {
        let value = 0;

        products.forEach((item) => {
            value += item.unitPrice;
        });

        setSum(value);
    }

    const checkout = () => {
        dispatch(cartActions.checkout());
    }

    const renderScript = () => {
        if (props.checkoutId == null)
            return;

        //sample code from Mercado Pago
        let script = document.createElement("script");

        // The source domain must be completed according to the site for which you are integrating.
        // For example: for Argentina ".com.ar" or for Brazil ".com.br".
        script.src = "https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js";
        script.type = "text/javascript";
        script.dataset.preferenceId = props.checkoutId;
        document.getElementById("button-checkout").innerHTML = "";
        document.querySelector("#button-checkout").appendChild(script);
    }

    const itemTemplate = (item) => {
        return (
            <div className="product-item">
                <div className="image-container">
                    <ProductImage image={item.image} />
                </div>
                <div className="product-list-detail">
                    <span>{item.productName}</span>
                    <div>
                        <i className="pi pi-tag product-category-icon"></i>
                        <span className="product-category">{item.category}</span>
                    </div>
                </div>
                <div className="product-list-action">
                    <span>R$ {item.unitPrice}</span>
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

                    <div style={{ marginTop: "20px", marginLeft: "70px", display: "inline" }}>
                        <div><strong>Total</strong></div>
                        <div>R$&nbsp;<strong>{sum}</strong></div>
                    </div>
                    <hr />
                    <div>
                        <center>
                            <div><img src="images/logos/mercado_pago.png" style={{ height: "40px" }} /></div>
                            <div><small>Realize o checkout com o Mercado Pago nosso parceiro em meio de pagamentos.</small></div>
                        </center>
                    </div>
                    <hr />
                    <div className="p-formgroup-inline" style={{ marginTop: "30px", marginLeft: "70px", display: (props.isCheckingout) ? "none": "" }}>
                        <Button className="p-button-help" onClick={(e) => checkout()}><small>Checkout</small>&nbsp;&nbsp;<i className="pi pi-check-circle"></i></Button>                        
                        <Button className="p-button-secondary" onClick={(e) => emptyCart()} style={{ marginLeft: "10px" }}><small><Trans>lbl_empty_cart</Trans></small>&nbsp;&nbsp;<i className="pi pi-undo"></i></Button>
                    </div>
                    <div id="button-checkout"></div>
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
            reload: state.reducers.cart.reload,
            checkoutId: state.reducers.cart.checkoutId,
            isCheckingout: state.reducers.cart.isCheckingout
        }
    } else {
        return {
            cart: Array.isArray(state.reducers.cart.cart) ? state.reducers.cart.cart : new Array(),
            reload: state.reducers.cart.reload,
            checkoutId: state.reducers.cart.checkoutId,
            isCheckingout: state.reducers.cart.isCheckingout,
            error: state.reducers.products.error
        }
    }
}

export default connect(mapStateToProps)(Cart);
