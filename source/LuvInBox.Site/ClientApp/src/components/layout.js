import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './menu/navMenu';
import NavFooter from './menu/navFooter';

const Layout = (props) => {
    return(
    <React.Fragment>
        <NavMenu />
        <Container className="granContainer">
            {props.children}
        </Container>
        <NavFooter />
    </React.Fragment>
)};

export default Layout;