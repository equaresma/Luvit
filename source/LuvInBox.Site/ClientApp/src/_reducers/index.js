import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { user } from './user.reducer';
import { alert } from './alert.reducer';
import { products } from './product.reducer';
import { cart } from './cart.reducer';
import { address } from './address.reducer';
import { customer } from './customer.reducer';
import { vendor } from './vendor.reducer';

const reducers = combineReducers({
    authentication,
    user,
    alert,
    products,
    cart,
    address,
    customer,
    vendor
});

export default reducers;
