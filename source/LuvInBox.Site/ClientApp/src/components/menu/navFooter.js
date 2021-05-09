import React from 'react';
import NavFooterAdm from './navFooterAdm';
import NavFooterSite from './navFooterSite';

import './navFooter.css';

export default class NavFooter extends React.PureComponent {
    builder = () => {
        if (window.location.pathname.includes("adm/")) {
            return <NavFooterAdm />
        } else {
            return <NavFooterSite />
        }
    }

    render() {
        return this.builder()    
    }    
}

