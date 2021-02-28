import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { withTranslation } from 'react-i18next';

import MenuLogin from './menuLogin';
import MenuCart from './menuCart';
import { userActions } from '../../../src/_actions';

import './navMenu.css';

class NavMenu extends React.PureComponent<{t}, { isOpen: boolean }> {
    public state = {
        isOpen: false,
        search: ''
    };

    public onLogout() {
        const dispatch = useDispatch();
        dispatch(userActions.logout());
    }

    public render() {
        const { t } = this.props;

        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">
                            <img src="/logo.png" className="siteLogo" />
                        </NavbarBrand>
                        <Nav>
                            <form className="mx-2 my-auto d-inline w-100">
                                <div className="input-group">
                                    <span className="p-input-icon-right">
                                        <i className="pi pi-search" />
                                        <InputText defaultValue={this.state.search} placeholder={t('search')} className="form-control" />
                                    </span>
                                </div>
                            </form>
                        </Nav>
                        <NavbarToggler onClick={this.toggle} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink className="footLnk" href="/"><i className="pi pi-home"></i></NavLink>
                                </NavItem>
                                <NavItem>
                                    <MenuLogin />
                                </NavItem>
                                <NavItem>
                                    <MenuCart />
                                </NavItem>
                                <NavItem>
                                    <button onClick={this.onLogout}>Logout</button>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

export default withTranslation()(NavMenu)
