import * as React from 'react';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { withTranslation } from 'react-i18next';

import './NavMenu.css';

class NavMenu extends React.PureComponent<{t}, { isOpen: boolean }> {
    public state = {
        isOpen: false,
        search: ''
    };

    public render() {
        const { t } = this.props;

        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">
                            <img src="/logo.png" height="55" />
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
                                    <NavLink className="footLnk" href="/account/login"><i className="pi pi-user"></i></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="footLnk" href="#"><i className="pi pi-shopping-cart"></i></NavLink>
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
