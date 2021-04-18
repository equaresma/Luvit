import React from 'react';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './navFooter.css';

export default class NavFooter extends React.PureComponent {
    render() {
        return (
            <section>
                <footer id="footer">
                    <div className="container p-4">
                        <div className="row">
                            <div className="col-3">
                                <img src="/logo-footer.png" className="logo" />
                            </div>

                            <div className="col-3">
                                <h5 className="footer_title"><Trans>lbl_institutional</Trans></h5>
                                <hr />
                                <ul className="list-unstyled mb-0">
                                    <li className="footer_item">
                                        <Link to="/institutional/luvinbox_manifest" className="footer_link"><Trans>footer_manifest</Trans></Link>
                                    </li>
                                    <li className="footer_item">
                                        <Link to="/institutional/whoweare" className="footer_link"><Trans>footer_who_wew_are</Trans></Link>
                                    </li>
                                    <li className="footer_item">
                                        <Link to="/institutional/privacy_policy" className="footer_link"><Trans>footer_privacy_policy</Trans></Link>
                                    </li>
                                    <li className="footer_item">
                                        <Link to="/institutional/return_policy" className="footer_link"><Trans>footer_return_policy</Trans></Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-3">
                                <h5 className="footer_title mb-0"><Trans>lbl_doubts</Trans></h5>
                                <hr/>
                                <ul className="list-unstyled">
                                    <li className="footer_item">
                                        <Link to="/contact/faq" className="footer_link">FAQ</Link>
                                    </li>
                                    <li className="footer_item">
                                        <Link to="/contact" className="footer_link"><Trans>footer_contact_us</Trans></Link>
                                    </li>
                                    <li className="footer_item">
                                        <a href="https://api.whatsapp.com/send?phone=5511966593807&text=LuvInBox20%a20%contato" className="footer_link"><FontAwesomeIcon icon={['fab', 'whatsapp']} />&nbsp;WhatsApp</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-3">
                                <h5 className="footer_title mb-0"><Trans>lbl_vendors</Trans></h5>
                                <hr />
                                <ul className="list-unstyled">
                                    <li className="footer_item">
                                        <Link to="/register/vendor" className="footer_link"><Trans>footer_be_vendor</Trans></Link>
                                    </li>
                                    <li className="footer_item">
                                        <Link to="/vendor_area" className="footer_link"><Trans>footer_vendors_area</Trans></Link>
                                    </li>
                                    <li className="footer_item">
                                        <Link to="/vendor_faq" className="footer_link">FAQ</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container p-2 pb-0">
                        <section className="mb-3">
                            <a className="btn-floating m-3" href="#!" role="button"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                            <a className="btn-floating m-3" href="#!" role="button"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                            <a className="btn-floating m-3" href="https://www.instagram.com/luvinboxbr" role="button"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                            <a className="btn-floating m-3" href="#!" role="button"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                        </section>
                    </div>
                    <div className="text-center p-2">
                        <span className="copyright">&copy;2021 <Trans>txt_copyright</Trans></span>
                    </div>
                </footer>
            </section>
        );
    }
}
