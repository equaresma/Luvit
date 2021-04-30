import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { cartActions } from '../../_actions';
import { cartService } from '../../_services';
import { InputText } from 'primereact/inputtext';
import { OrderList } from 'primereact/orderlist';
import { Button } from 'primereact/button';
import { Trans, useTranslation } from 'react-i18next';
import ProductImage from '../../components/product/image';

import './index.css';
import product from '../../components/product';

const Cart = (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const [products, setProducts] = useState([]);
    const [sum, setSum] = useState(0);
    const [isCalculated, setIsCalculated] = useState(false);

    useEffect(() => {
        if (products.length != props.cart.length)
            setProducts(props.cart);

        if (props.reload) {
            dispatch(cartActions.get());
            calculate();
        }

        if (props.isCheckingout)
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
            value += item.price;
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

    const calculateShipping = async e => {
        if (isCalculated)
            return;

        const cep = e.target.value;

        await cartService.calculateShipping(cep)
            .then((shippings) => {
                setIsCalculated(true);

                shippings.forEach((item) => {
                    let id = item.productId;
                    let product = products.find(({ productId }) => productId == id);

                    if (product) {
                        product.shipping = item;
                    }                
                });

                setProducts(products);
            })
            .catch((err) => {
                alert('Erro ao consultar Frete: ' + err.message);
            });
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
                    <div>
                        <img src={`images/logos/${item.vendorDocNumber.replace(/[./-]/g, '')}.png`} style={{height:20}}/>
                    </div>
                </div>
                <div className="product-list-action">
                    <div><Trans>lbl_price</Trans> <span>R$ {item.price}</span></div>
                    <div><Trans>lbl_shipping</Trans> <span>R$ {item.shipping.value}</span></div>
                    <div><Trans>lbl_deadline</Trans> <span>{item.shipping.deadline} dias.</span></div>
                    <div>
                        <Button onClick={(e) => removeProd(item)} className="p-button-secondary" icon="pi pi-trash" iconPos="left" tooltip={t('lbl_remove_product')}></Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="card">
                <center><h4 className="title"><Trans>lbl_cart</Trans></h4></center>
                <div className="orderlist-demo">
                    <div className="card">
                        <div style={{marginLeft: 50}}>
                            <div className="p-field p-col-6">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <img src="images/freight.png" style={{ height: 30 }} />
                                    </span>
                                    <InputText id="ZipCode" name="ZipCode" type="text" maxLength="20" placeholder={t('lbl_zipcode')}
                                        className="p-d-block" type="text" aria-describedby="zipCode-help" onBlur={calculateShipping} />
                                </div>
                                <small id="zipCode-help" className="p-invalid p-d-block text-right"><Trans>warn_zipcode_for_shipping</Trans></small>
                            </div>
                        </div>
                        <OrderList value={products} header={t('lbl_my_products')} dragdrop listStyle={{ height: 'auto' }} dataKey="id"
                            itemTemplate={itemTemplate} onChange={(e) => setValue(e)}></OrderList>

                        <div style={{ marginTop: "20px", marginLeft: "70px", display: "inline" }}>
                            <div><strong>Total</strong></div>
                            <div>R$&nbsp;<strong>{sum}</strong></div>
                        </div>
                        <hr />
                        <div className="p-formgroup-inline" style={{ marginTop: 30, marginLeft: 70, display: (props.isCheckingout) ? "none" : "" }}>
                            <Button className="p-button-help" onClick={(e) => checkout()}><small>Checkout</small>&nbsp;&nbsp;<i className="pi pi-check-circle"></i></Button>
                            <Button className="p-button-plain" onClick={(e) => emptyCart()} style={{ marginLeft: 10 }}><small><Trans>lbl_empty_cart</Trans></small>&nbsp;&nbsp;<i className="pi pi-undo"></i></Button>
                        </div>
                        <div id="button-checkout"></div>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <center>
                    <div><img src="images/logos/mercado_pago.png" style={{ height: 80 }} /></div>
                    <div><small><Trans>lbl_payment_partner_msg</Trans></small></div>
                </center>
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
