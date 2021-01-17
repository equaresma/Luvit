import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import 'primeflex/primeflex.css';
import { Steps } from 'primereact/steps';
import { Trans, useTranslation } from 'react-i18next';
import { Form } from 'reactstrap';

export class Address extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    validateFields(formData, errors) {
        if (formData.zipCode == null || formData.zipCode == "")
            errors.name.addError(useTranslation('lbl_name_obligatory'));

        return errors;
    }

    getAddress(event) {
        event.preventDefault();

    }

    handleSubmit(event) {
        event.preventDefault();
        this.continue();
    }

    render() {
        const { values, handleChange, stepItems, currentStep } = this.props;

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <div>
                            <Steps model={stepItems} activeIndex={currentStep} readOnly={true} />
                            <br />
                        </div>
                        <h1><Trans>address</Trans></h1>
                        <br />
                        <Form validate={this.validateFields} liveValidate={true} showErrorList={false}>
                            <div className="p-fluid p-formgrid p-grid">
                                <div className="p-field p-col-12">
                                    <InputText id="zipcode" name="zipCode" onChange={handleChange('mainAddress')} value={values.address.zipcode} required maxLength="20" onBlur={this.getAddress()} />
                                    <label htmlFor="zipcode"><Trans>lbl_zipcode</Trans></label>
                                    <small id="username2-help" className="p-invalid p-d-block"><Trans>lbl_zipcode_obligatory</Trans></small>
                                </div>
                                <div className="p-field p-col-12 p-md-6">
                                    <label htmlFor="local">Local</label>
                                    <InputText id="local" name="local" onChange={handleChange('mainAddress')} value={values.address.local} required />
                                </div>
                                <div className="p-field p-col-12 p-md-6">
                                    <label htmlFor="number"><Trans>number</Trans></label>
                                    <InputNumber id="number" name="number" onChange={handleChange('mainAddress')} value={values.address.number} required />
                                </div>
                                <div className="p-field p-col-12">
                                    <label htmlFor="complement"><Trans>lbl_complement</Trans></label>
                                    <InputText id="complement" name="complement" onChange={handleChange('mainAddress')} value={values.address.complement} maxLength="255" />
                                </div>
                                <div className="p-field p-col-12 p-md-5">
                                    <label htmlFor="country"><Trans>lbl_country</Trans></label>
                                    <InputText id="country" name="country" onChange={handleChange('mainAddress')} value={values.address.country} maxLength="140" required />
                                </div>
                                <div className="p-field p-col-12 p-md-2">
                                    <label htmlFor="state"><Trans>lbl_state</Trans></label>
                                    <InputText id="state" name="state" onChange={handleChange('mainAddress')} value={values.address.state} maxLength="20" required />
                                </div>
                                <div className="p-field p-col-12 p-md-5">
                                    <label htmlFor="city"><Trans>lbl_city</Trans></label>
                                    <InputText id="city" name="city" onChange={handleChange('mainAddress')} value={values.address.city} maxLength="140" required />
                                </div>
                                <div className="p-field p-col-12">
                                    <div className="p-field-checkbox">
                                        <Checkbox inputId="hasPhysicalStore" onChange={handleChange('hasPhysicalStore')} />
                                        <label htmlFor="hasPhysicalStore"><Trans>lbl_has_physical_store</Trans></label>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="p-formgroup-inline">
                                <Button
                                    label={useTranslation("btn_next")}
                                    type="submit"
                                />
                                <Button
                                    style={{ marginLeft: "10px" }}
                                    label={useTranslation("btn_prev")}
                                    type="button"
                                    onClick={this.back}
                                />
                            </div>
                        </Form>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default Address