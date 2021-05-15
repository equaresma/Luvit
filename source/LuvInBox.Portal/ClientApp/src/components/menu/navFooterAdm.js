import React from 'react';
import { Trans } from 'react-i18next';

import './navFooter.css';

export default class NavFooterAdm extends React.PureComponent {
    render() {
        return (
            <section>
                <footer id="footer">                    
                    <div className="text-center p-2">
                        <span className="copyright">&copy;2021 <Trans>txt_copyright</Trans></span>
                    </div>
                </footer>
            </section>
        );
    }
}
