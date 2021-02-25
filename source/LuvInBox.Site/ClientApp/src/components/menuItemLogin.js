import * as React from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';

class MenuLogin extends React.PureComponent {
    render() {
        if (props.user != null)
            return (<NavLink className="footLnk" href="/account/login"><i className="pi pi-user">{user.Name}</i></NavLink>);
        else
            return (<NavLink className="footLnk" href="/account/changepass"><i className="pi pi-user-edit"></i></NavLink>);
    }
}

function mapStateToProps(state) {
    const u = state.user ? state.user : {};
    return { user: u };
}

export default connect(mapStateToProps)(MenuLogin);
