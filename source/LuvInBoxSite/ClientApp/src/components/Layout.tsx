import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import NavFooter from './NavFooter';

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <NavMenu />
        <Container className="granContainer">
            {props.children}
        </Container>    
        <NavFooter />
    </React.Fragment>
);
