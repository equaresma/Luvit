import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { useTranslation } from 'react-i18next';
import { userActions } from '../../../src/_actions';
import MenuLogin from './menuLogin';
import MenuCart from './menuCart';

import './navMenu.css';

const NavMenu = (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { search } = props;
    const { isOpen, setIsOpen } = props;
    const { loggedIn } = props;

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

    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm" light>
                <Container>
                    <NavbarBrand tag={Link} to="/">
                        <img src="/logo-menu.png" className="siteLogo" />
                    </NavbarBrand>
                    <Nav>
                        <form className="mx-2 my-auto d-inline w-100">
                            <div className="input-group">
                                <span className="p-input-icon-right">
                                    <i className="pi pi-search" />
                                    <InputText defaultValue={search} placeholder={t('search')} className="form-control" />
                                </span>
                            </div>
                        </form>
                    </Nav>
                    <NavbarToggler onClick={toggle} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={isOpen} navbar>
                        <ul className="navbar-nav flex-grow">
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

function mapStateToProps(state) {
    let juser = JSON.parse(localStorage.getItem('user'));
    if (juser) {
        return {
            loggedIn: true
        }
    } else {
        return {
            loggedIn: state.reducers.authentication.loggedIn
        }
    }
}

export default connect(mapStateToProps)(NavMenu);
