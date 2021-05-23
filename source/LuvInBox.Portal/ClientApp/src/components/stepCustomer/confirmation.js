import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Trans, useTranslation } from 'react-i18next';

const Confirm = (props) => {
    const { t } = useTranslation();

    useEffect(() => {
    });
    
    return (
        <div className="card">
            <div style={{ display: (props.errorMessage) ? "" : "none" }}>
                {props.errorMessage && <p><Trans>lbl_msg_categ_error</Trans>: {props.errorMessage}</p>}
                <p><small><Trans>lbl_contact_adm</Trans></small></p>
                <Button style={{ marginLeft: "10px" }} label={t("btn_prev")} type="button" onClick={props.prevStep()} />
            </div>
            <div style={{ display: (!(props.errorMessage && props.requesting)) ? "" : "none" }}>
                <h1>Bem vindo</h1>
                <br/>
                <p>
                    Agora que você é um <span className="luvInBoxName">Luver</span> consegue aproveitar todos os benefícios da <span className="luvInBoxName">LuvInBox</span>.
                </p>
            </div>
            <ProgressSpinner style={{ width: '50px', height: '50px', display: (props.requesting) ? "" : "none" }} strokeWidth="8" />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        errorMessage: (state.reducers.customer) ? state.reducers.customer.error : null,
        requesting: (state.reducers.customer) ? state.reducers.customer.requesting : true
    };
}

export default connect(mapStateToProps)(Confirm);