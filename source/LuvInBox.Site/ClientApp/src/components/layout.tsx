import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './menu/navMenu';
import NavFooter from './menu/navFooter';

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <NavMenu />
        <Container className="granContainer">
            {props.children}
        </Container>    
        <NavFooter />
    </React.Fragment>
);
