import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { user } from './user.reducer';
import { alert } from './alert.reducer';
import { products } from './product.reducer';
import { cart } from './cart.reducer';
import { address } from './address.reducer';
import { customer } from './customer.reducer';

const rootReducer = combineReducers({
    authentication,
    user,
    alert,
    products,
    cart,
    address,
    customer
});

export default rootReducer;
