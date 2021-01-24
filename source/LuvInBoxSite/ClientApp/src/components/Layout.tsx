import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import NavFooter from './NavFooter';

//import '../../node_modules/primereact/resources/primereact.css';


import { CarouselProducts } from './CarouselProducts';


export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <NavMenu />
        <CarouselProducts />
        <Container>
            {props.children}
        </Container>
        <NavFooter />
    </React.Fragment>
);
