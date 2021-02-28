import * as React from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { Badge } from 'primereact/badge';

class MenuCart extends React.PureComponent {
    render() {
        const { count } = this.props;

        if (count > 0) {
            return (<NavLink className="footLnk" href="/cart"><i className="pi pi-shopping-cart"><Badge value={count} severity="success" className="p-mr-2">Cart</Badge></i></NavLink>);
        } else
            return (<NavLink className="footLnk" href="/cart"><i className="pi pi-shopping-cart"></i></NavLink>);
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
