import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { userActions, productActions } from '../../../src/_actions';

import './navMenu.css';

const NavMenuAdm = (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { isOpen, setIsOpen } = props;
    const { isUnobstrutive } = props;
    const { loggedIn } = props;
    const { load } = props;

    useEffect(() => {
        dispatch(userActions.getUnobstrutive());
    }, []);

    const onLogout = () => {
        dispatch(userActions.logout());
    }

    const toggle = () => {
        setIsOpen({
            isOpen: !isOpen
        });
    }

    const logoffCls = () => {
        if (loggedIn) {
            return "blank";
        } else {
            return "hidden";
        }
    }

    const press = (event) => {
        if (event.key === 'Enter') {
            dispatch(productActions.filter(event.target.value));
        }
    }

    const onSetIsUnobstrutive = (e) => {
        e.preventDefault();
        dispatch(userActions.setUnobstrutive(!isUnobstrutive));
    }

    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm" light>
                <Container>
                    <NavbarBrand tag={Link} to="/">
                        <img src="/logo-menu.png" className="siteLogo" />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={isOpen} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink className="footLnk" href="/adm"><i className="pi pi-th-large"></i> Product</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="footLnk" href="/adm"><i className="pi pi-chart-bar"></i> Inventory</NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

function mapStateToProps(state, ownProps) {
    let juser = JSON.parse(localStorage.getItem('user'));
    if (juser) {
        return {
            loggedIn: true,
            isUnobstrutive: state.reducers.user.isUnobstrutive,
            load: false
        }
    } else {
        return {
            loggedIn: state.reducers.authentication.loggedIn,
            isUnobstrutive: state.reducers.user.isUnobstrutive,
            load: false
        }
    }
}

export default connect(mapStateToProps)(NavMenuAdm);

