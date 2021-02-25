import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './navMenu';
import NavFooter from './navFooter';

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <NavMenu />
        <Container className="granContainer">
            {props.children}
        </Container>    
        <NavFooter />
    </React.Fragment>
);
