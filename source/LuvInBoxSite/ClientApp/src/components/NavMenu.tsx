import './NavMenu.css';

import * as React from 'react';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { width } from '@fortawesome/free-solid-svg-icons/faLevelDownAlt';


export default class NavMenu extends React.PureComponent<{}, { isOpen: boolean }> {
    public state = {
        isOpen: false,
        search: ''
    };

    public render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">
                            <img src="/logo.png" height="55" />
                        </NavbarBrand>
                        <Nav right eventKey={0}>
                            <form className="mx-2 my-auto d-inline w-100">
                                <div className="input-group">
                                    <span className="p-input-icon-right">
                                        <i className="pi pi-search" />
                                        <InputText defaultValue={this.state.search} placeholder="Search" className="form-control" />
                                    </span>
                                </div>
                            </form>
                        </Nav>
                        <NavbarToggler onClick={this.toggle} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <Button icon="pi pi-home" className="p-button-rounded p-button-info p-button-text" />
                                </NavItem>
                                <NavItem>
                                    <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-text" />
                                </NavItem>
                                <NavItem>
                                    <Button icon="pi pi-shopping-cart" className="p-button-rounded p-button-info p-button-text" />
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
