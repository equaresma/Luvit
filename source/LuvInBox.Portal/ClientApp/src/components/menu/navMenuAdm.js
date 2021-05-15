import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { userActions } from '../../../src/_actions';

import './navMenu.css';

const NavMenuAdm = (props) => {
    const dispatch = useDispatch();
    const { isOpen, setIsOpen } = props;
    const { loggedIn } = props;

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

    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm" light>
                <Container>
                    <NavbarBrand tag={Link} to="/adm">
                        <img src="/logo-menu.png" className="siteLogo" />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={isOpen} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink className="footLnk" href="/adm/products"><i className="pi pi-th-large"></i> Produto</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="footLnk" href="/adm"><i className="pi pi-chart-bar"></i> Estoque</NavLink>
                            </NavItem>
                            <NavItem className={"" + logoffCls()}>
                                <NavLink onClick={onLogout} className="pi pi-sign-out"></NavLink>
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
            loggedIn: true,
            load: false
        }
    } else {
        return {
            loggedIn: state.reducers.authentication.loggedIn,
            load: false
        }
    }
}

export default connect(mapStateToProps)(NavMenuAdm);

