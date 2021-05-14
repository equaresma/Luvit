import React from 'react';
import NavMenuAdm from './navMenuAdm';
import NavMenuSite from './navMenuSite';

export default class NavMenu extends React.PureComponent {
    builder = () => {
        if (window.location.pathname.includes("/adm")) {
            return <NavMenuAdm />
        } else {
            return <NavMenuSite />
        }
    }

    render() {
        return this.builder()
    }
}