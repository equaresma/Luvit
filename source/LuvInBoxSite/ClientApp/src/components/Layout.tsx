import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import NavFooter from './NavFooter';

//import '../../node_modules/primereact/resources/primereact.css';

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <NavMenu />
        <Container>
            {props.children}
        </Container>
        <NavFooter />
    </React.Fragment>
);
