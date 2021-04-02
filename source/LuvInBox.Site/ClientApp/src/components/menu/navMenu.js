import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { useTranslation } from 'react-i18next';
import { userActions, productActions } from '../../../src/_actions';
import MenuLogin from './menuLogin';
import MenuCart from './menuCart';

import './navMenu.css';

const NavMenu = (props) => {
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
                    <Nav>
                        <div className="input-group">
                            <span className="p-input-icon-right">
                                <i className="pi pi-search" />
                                <InputText onKeyPress={press} placeholder={t('search')} className="form-control" />
                            </span>
                        </div>
                    </Nav>
                    <NavbarToggler onClick={toggle} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={isOpen} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink className="footLnk" href="" onClick={onSetIsUnobstrutive}><i className={(isUnobstrutive) ? "pi pi-eye-slash" : "pi pi-eye"}
                                    title={(isUnobstrutive) ? t('tit_unobtrusive') : t('tit_obtru3sive')} ></i></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="footLnk" href="/"><i className="pi pi-home"></i></NavLink>
                            </NavItem>
                            <NavItem>
                                <MenuLogin />
                            </NavItem>
                            <NavItem className={"" + logoffCls()}>
                                <NavLink onClick={onLogout} className="pi pi-sign-out"></NavLink>
                            </NavItem>
                            <NavItem>
                                <MenuCart />
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

export default connect(mapStateToProps)(NavMenu);

