import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { cartActions } from '../../_actions';
import { history } from '../../_helpers';
import ProductViewer from '../../components/product/index';

const ProductByCategory = ({ products = [] }) => {
    const dispatch = useDispatch();

    const back = () => {
        history.push('/');
    }

    const addCart = (product) => {
        dispatch(cartActions.addProduct(product))
    }

    return (
        <ProductViewer onAddCart={addCart} onBack={back} products={products} />
    );
}

function mapStateToProps(state) {
    return {
        products: (state.reducers.products.productByCategory) ? state.reducers.products.productByCategory : []
    };
}

export default connect(mapStateToProps)(ProductByCategory);
