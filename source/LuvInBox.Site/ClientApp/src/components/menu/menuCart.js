import * as React from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';

class MenuCart extends React.PureComponent {
    render() {
        const { count } = this.props;

        if (count > 0) {
            return (<NavLink className="footLnk" href="/cart"><i className="pi pi-shopping-cart">Cart({count})</i></NavLink>);
        } else
            return (<NavLink className="footLnk" href="/cart"><i className="pi pi-shopping-cart">Cart</i></NavLink>);
    }
}

function mapStateToProps(state) {
    let jcart = JSON.parse(localStorage.getItem('cart'));
    if (jcart) {
        return {
            count: jcart.length
        }
    } else {
        return {
            count: 0
        }
    }
}

export default connect(mapStateToProps)(MenuCart);
