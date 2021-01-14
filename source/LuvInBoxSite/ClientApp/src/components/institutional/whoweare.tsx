import * as React from 'react';
import { connect } from 'react-redux';
import { Trans } from 'react-i18next';

class WhoWeAre extends React.PureComponent {
    // This method is called when the component is first added to the document
    public componentDidMount() {
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
    }

    public render() {
        return (
            <React.Fragment>
                <h1 id="tabelLabel"><Trans>who_wew_are_titile</Trans></h1>
            </React.Fragment>
        );
    }


}

export default connect()(WhoWeAre as any);
