import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import { Trans, withTranslation } from 'react-i18next';
import { Calendar } from 'primereact/calendar';
import { Form } from 'reactstrap';

import 'primeflex/primeflex.css';

export class Details extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange, stepItems, currentStep } = this.props;
        const { t } = this.props;

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <div>
                            <Steps model={stepItems} activeIndex={currentStep} readOnly={true} />
                            <br />
                            <br />
                        </div>
                        <h2><Trans>general_info</Trans></h2>
                        <br />
                        <br />
                        <Form onSubmit={this.continue}>
                            <div className="p-fluid">
                                <InputText id="name" onChange={handleChange('name')} defaultValue={values.name} type="text" aria-describedby="username2-help" className="p-d-block" required maxLength="120" placeholder={t('lbl_name')} />
                                <small id="username2-help" className="p-d-block text-right"><Trans>lbl_name_required</Trans></small>
                            </div>
                            <div className="p-fluid">
                                <InputText id="fantasyName" onChange={handleChange('fantasyName')} defaultValue={values.fantasyName} type="text" aria-describedby="userfantasyName2-help" className="p-d-block" required maxLength="120" placeholder={t('lbl_fantasy_name')} />
                                <small id="userfantasyName2-help" className="p-d-block text-right"><Trans>lbl_fantasy_name_required</Trans></small>
                            </div>
                            <div className="p-fluid">
                                <InputText id="number" name="number" onChange={handleChange('documentNumber')} defaultValue={values.documentNumber.number} type="text" aria-describedby="number2-help" className="p-d-block" required maxLength="30" placeholder={t('lbl_document')} />
                                <small id="number2-help" className="p-d-block text-right"><Trans>lbl_document_required</Trans></small>
                            </div>
                            <div className="p-fluid">
                                <Calendar id="foundedIn" name="foundedIn" value={values.foundedIn} onChange={handleChange('foundedIn')} aria-describedby="foundedIn2-help" required placeholder={t('lbl_founded_in')}></Calendar>
                                <small id="foundedIn2-help" className="p-d-block text-right"><Trans>lbl_founded_in_required</Trans></small>
                            </div>
                            <div className="p-fluid">
                                <InputMask id="mainPhone" name="mainPhone" type="text" mask="+99(99) 9999-9999" onChange={handleChange('mainPhone')} value={values.mainPhone} aria-describedby="mainPhone-help" className="p-d-block" required maxLength="30" placeholder={t('phone')} />
                                <small id="mainPhone-help" className="p-d-block text-right"><Trans>phone_fmt</Trans></small>
                            </div>
                            <br />
                            <Button
                                label={t("btn_next")}
                                type="submit"
                            />
                        </Form>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default withTranslation()(Details)