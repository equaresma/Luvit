import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import { Trans, useTranslation } from 'react-i18next';
import { Form } from 'reactstrap';
import { vendorActions } from '../../../src/_actions/vendor.actions';

const Details = (props) => {
    const dispatch = useDispatch();
    const { nextStep, stepItems, currentStep } = props;
    const { t } = useTranslation();
    const [vendor, setVendor] = useState(props.vendor);

    const handleChange = input => e => {
        const { target } = e;

        setVendor({
            ...vendor,
            [target.name]: target.type === "checkbox" ? target.checked : target.value
        });
    }

    const next = e => {
        e.preventDefault();
        dispatch(vendorActions.incrementVendor(vendor));
        nextStep();
    }

    return (
        <div>
            <div className="divSteps">
                <Steps model={stepItems} activeIndex={currentStep} readOnly={true} />
            </div>
            <div className="card">
                <Form onSubmit={next}>
                    <h4><Trans>general_info</Trans></h4>
                    <br />
                    <div className="p-fluid">
                        <InputText id="name" name="Name" onChange={handleChange()} value={vendor.Name} type="text" aria-describedby="name-help"
                            className="p-d-block" required maxLength="120" placeholder={t('lbl_name')} maxLength="150" autoFocus />

                        <small id="name-help" className="p-d-block text-right"><Trans>lbl_name_required</Trans></small>
                    </div>
                    <div className="p-fluid">
                        <InputText id="fantasyName" name="FantasyName" onChange={handleChange()} value={vendor.FantasyName} type="text"
                            aria-describedby="userfantasyName2-help" className="p-d-block" required maxLength="120" placeholder={t('lbl_fantasy_name')} />
                        <small id="userfantasyName2-help" className="p-d-block text-right"><Trans>lbl_fantasy_name_required</Trans></small>
                    </div>
                    <div className="p-fluid">
                        <InputMask id="documentNumber" name="DocumentNumber" type="text" mask="99.999.999/9999-99" onChange={handleChange()}
                            value={vendor.DocumentNumber} placeholder={t('lbl_company_document')} aria-describedby="document-help" />
                        <small id="document-help" className="p-d-block text-right"><Trans>lbl_company_document_required</Trans></small>
                    </div>
                    <div className="p-fluid">
                        <InputMask id="mainPhone" name="MainPhone" type="text" mask="+99(99) 999-9999?" onChange={handleChange()} value={vendor.MainPhone}
                            aria-describedby="mainPhone-help" className="p-d-block" required maxLength="30" placeholder={t('phone')} />
                        <small id="mainPhone-help" className="p-d-block text-right"><Trans>phone_fmt</Trans></small>
                    </div>
                    <div className="p-fluid">
                        <InputMask id="foundedIn" name="FoundedIn" value={vendor.FoundedIn} mask="99/99/9999" slotChar="mm/dd/yyyy"
                            onChange={handleChange()} aria-describedby="foundedIn-help" required placeholder={t('lbl_founded_in')}></InputMask>
                        <small id="foundedIn-help" className="p-d-block text-right"><Trans>lbl_founded_in_required</Trans></small>
                    </div>
                    <br />
                    <Button
                        label={t("btn_next")}
                        type="submit"
                    />
                </Form>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return { vendor: state.reducers.vendor.vendor };
}

export default connect(mapStateToProps)(Details);