import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import NavFooter from './NavFooter';
import { CarouselPromo } from './CarouselPromo';

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <NavMenu />
        <CarouselPromo />
        <Container>
            {props.children}
        </Container>
        <NavFooter />
    </React.Fragment>
);
