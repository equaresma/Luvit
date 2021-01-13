import * as React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Trans } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NavFooter extends React.PureComponent<{}, {}> {
    public render() {
        return (
            <footer id="footer">
                <div className="footer-fluid container-fluid">
                    <div className="container">
                        <div className="row">
                            <div id="first_footer" className="col-md-4">
                                <Nav vertical>
                                    <NavItem>
                                        <NavLink className="footLnk" href="/institutional/whoweare"><Trans>footer_who_wew_are</Trans></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="footLnk" href="#"><Trans>footer_privacy_policy</Trans></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="footLnk" href="#"><Trans>footer_return_policy</Trans></NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                            <div id="secound_footer" className="col-md-4">
                                <Nav vertical>
                                    <NavItem>
                                        <NavLink className="footLnk" href="#">FAQ</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="footLnk" href="#"><Trans>footer_contact_us</Trans></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="footLnk" href="#"><FontAwesomeIcon icon={['fab', 'whatsapp']} />&nbsp;WhatsApp</NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                            <div id="third_footer" className="col-md-4">
                                <Nav vertical>
                                    <NavItem>
                                        <NavLink className="footLnk" href="#"><Trans>footer_be_vendor</Trans></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="footLnk" href="#"><Trans>footer_vendors_area</Trans></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="footLnk" href="#">FAQ</NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "25px", marginBottom: "25px" }}>
                            <div className="col-md-4"></div>
                            <div className="col-md-4 center">
                                <Nav>
                                    <NavItem>
                                        <NavLink className="footLnk" href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="footLnk" href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="footLnk" href="#"><FontAwesomeIcon icon={['fab', 'youtube']} /></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="footLnk" href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">

                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
