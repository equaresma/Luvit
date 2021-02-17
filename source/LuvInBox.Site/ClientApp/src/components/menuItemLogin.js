import * as React from 'react';
import { NavLink } from 'reactstrap';

export default class MenuLogin extends React.PureComponent {
    render() {
        if (localStorage.toker != null)
            return (<NavLink className="footLnk" href="/account/login"><i className="pi pi-user"></i></NavLink>);
        else
            return (<NavLink className="footLnk" href="/account/changepass"><i className="pi pi-user-edit"></i></NavLink>);
    }
}
