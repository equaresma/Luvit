import React, { Component } from 'react'
import { Form } from 'reactstrap';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import { Trans, withTranslation } from 'react-i18next';
import { InputMask } from 'primereact/inputmask';

import 'primeflex/primeflex.css';

export class Details extends Component {   
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    validateFields(formData, errors) {
        const { t } = this.props;

        if (formData.name == null || formData.name == "")
            errors.name.addError(t('lbl_name_obligatory'));

        if (formData.fantasyName == null || formData.fantasyName == "")
            errors.fantasyName.addError(t('lbl_fantasy_name_obligatory'));

        if (formData.documentNumber == null || formData.documentNumber == "")
            errors.documentNumber.addError(t('lbl_document_obligatory'));

        if (formData.foundedIn == null || !(Object.prototype.toString.call(formData.foundedIn) === '[object Date]'))
            errors.foundedIn.addError(t('lbl_founded_in_obligatory'));

        return errors;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.continue();
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
                        </div>
                        <h2><Trans>general_info</Trans></h2>
                        <br />
                        <Form validate={this.validateFields} liveValidate={false} showErrorList={false}>
                            <div className="p-fluid">
                                <span className="p-float-label">
                                    <InputText id="name" onChange={handleChange('name')} defaultValue={values.name} type="text" aria-describedby="username2-help" className="p-d-block" required maxLength="120" />
                                    <label htmlFor="name"><Trans>lbl_name</Trans></label>
                                    <small id="username2-help" className="p-d-block text-right"><Trans>lbl_name_obligatory</Trans></small>
                                </span>
                            </div>
                            <div className="p-fluid">
                                <span className="p-float-label">
                                    <InputText id="fantasyName" onChange={handleChange('fantasyName')} defaultValue={values.fantasyName} type="text" aria-describedby="userfantasyName2-help" className="p-d-block" required maxLength="120" />
                                    <label htmlFor="fantasyName"><Trans>lbl_fantasy_name</Trans></label>
                                    <small id="userfantasyName2-help" className="p-d-block text-right"><Trans>lbl_fantasy_name_obligatory</Trans></small>
                                </span>
                            </div>
                            <div className="p-fluid">
                                <span className="p-float-label">
                                    <InputText id="number" name="number" onChange={handleChange('documentNumber')} defaultValue={values.documentNumber.number} type="text" aria-describedby="number2-help" className="p-d-block" required maxLength="30" />
                                    <label htmlFor="number"><Trans>lbl_document</Trans></label>
                                    <small id="number2-help" className="p-d-block text-right"><Trans>lbl_document_obligatory</Trans></small>
                                </span>
                            </div>
                            <div className="p-fluid">
                                <InputMask id="foundedIn" name="foundedIn" mask="99/99/9999" slotChar="mm/dd/yyyy" defaultValue={values.foundedIn} onChange={handleChange('foundedIn')} aria-describedby="foundedIn2-help" className="p-d-block" required></InputMask>
                                <label htmlFor="foundedIn"><Trans>lbl_founded_in</Trans></label>
                                <small id="foundedIn2-help" className="p-d-block text-right"><Trans>lbl_founded_in_obligatory</Trans></small>
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