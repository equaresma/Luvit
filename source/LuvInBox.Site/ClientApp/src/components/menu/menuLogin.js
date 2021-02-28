import * as React from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { Badge } from 'primereact/badge';

class MenuLogin extends React.PureComponent {
    render() {
        const { user, loggedIn } = this.props;

        if (loggedIn) {
            return (
                <NavLink className="footLnk" href="/register">
                    <i className="pi pi-user-edit p-overlay-badge">
                        <Badge severity="success"></Badge>
                    </i>
                    <span>{user.firstName + ' ' + user.lastName}</span>
                </NavLink>);
        } else
            return (
                <NavLink className="footLnk" href="/login">
                    <i className="pi pi-user p-overlay-badge">
                        <Badge severity="danger"></Badge>
                    </i>
                </NavLink>);
    }
}

function mapStateToProps(state) {
    let juser = JSON.parse(localStorage.getItem('user'));
    if (juser) {
        return {
            user: juser,
            loggedIn: true
        }
    } else {
        return {
            user: state.authentication.user,
            loggedIn: state.authentication.loggedIn
        }
    }
}

export default connect(mapStateToProps)(MenuLogin);
