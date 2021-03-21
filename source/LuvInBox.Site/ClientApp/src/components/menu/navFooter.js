import * as React from 'react';
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
                                        <a href="/institutional/luvinbox_manifest" className="footer_link"><Trans>footer_manifest</Trans></a>
                                    </li>
                                    <li className="footer_item">
                                        <a href="/institutional/whoweare" className="footer_link"><Trans>footer_who_wew_are</Trans></a>
                                    </li>
                                    <li className="footer_item">
                                        <a href="#!" className="footer_link"><Trans>footer_privacy_policy</Trans></a>
                                    </li>
                                    <li className="footer_item">
                                        <a href="#!" className="footer_link"><Trans>footer_return_policy</Trans></a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-3">
                                <h5 className="footer_title mb-0"><Trans>lbl_doubts</Trans></h5>
                                <hr/>
                                <ul className="list-unstyled">
                                    <li className="footer_item">
                                        <a href="#!" className="footer_link">FAQ</a>
                                    </li>
                                    <li className="footer_item">
                                        <a href="#!" className="footer_link"><Trans>footer_contact_us</Trans></a>
                                    </li>
                                    <li className="footer_item">
                                        <a href="#!" className="footer_link"><FontAwesomeIcon icon={['fab', 'whatsapp']} />&nbsp;WhatsApp</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-3">
                                <h5 className="footer_title mb-0"><Trans>lbl_vendors</Trans></h5>
                                <hr />
                                <ul className="list-unstyled">
                                    <li className="footer_item">
                                        <a href="/register/vendor" className="footer_link"><Trans>footer_be_vendor</Trans></a>
                                    </li>
                                    <li className="footer_item">
                                        <a href="#!" className="footer_link"><Trans>footer_vendors_area</Trans></a>
                                    </li>
                                    <li className="footer_item">
                                        <a href="#!" className="footer_link">FAQ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container p-2 pb-0">
                        <section className="mb-3">
                            <a className="btn-floating m-3" href="#!" role="button"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                            <a className="btn-floating m-3" href="#!" role="button"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                            <a className="btn-floating m-3" href="#!" role="button"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
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
