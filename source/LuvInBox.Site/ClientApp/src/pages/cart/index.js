import React, { useEffect } from 'react';
import { cartActions } from '../../_actions';
import { connect, useDispatch } from 'react-redux';

const Cart = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (props.reload)
            dispatch(cartActions.getAll());
    });

    const removeProd = (item) => {
        dispatch(cartActions.removeProduct(item));
    }

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {props.cart.map((item, index) =>
                    <li key={index}>
                        <div>{item.name}</div>
                        <div>{item.Price}</div>
                        <div><button onClick={(e) => removeProd(item)}>Remove</button></div>
                    </li>
                )}
            </ul>
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
            cart: Array.isArray(state.cart.cart) ? state.products.cart : new Array(),
            reload: true,
            error: state.products.error
        }
    }
}

export default connect(mapStateToProps)(Cart);
