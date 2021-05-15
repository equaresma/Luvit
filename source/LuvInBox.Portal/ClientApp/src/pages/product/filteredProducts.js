import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { cartActions } from '../../_actions';
import { history } from '../../_helpers';
import ProductViewer from '../../components/product/index';

const FilteredProducts = ({ products = [] }) => {
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
        products: (state.reducers.products.productFiltered) ? state.reducers.products.productFiltered : []
    };
}

export default connect(mapStateToProps)(FilteredProducts);
