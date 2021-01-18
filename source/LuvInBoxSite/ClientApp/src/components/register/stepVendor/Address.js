import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Steps } from 'primereact/steps';
import { Trans, withTranslation } from 'react-i18next';
import { Form } from 'reactstrap';
import AddressService from '../../../service/AddressService';

import 'primeflex/primeflex.css';

export class Address extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    getAddress(event) {
        const addressService = new AddressService();
        const { values } = this.props;

        addressService.getAddressByCEP(event.target.value)
            .then((response) => {     
                let strJson = response.data.replace('?', '').replace('(', '').replace(')', '').replace(';', '');
                let resp = JSON.parse(strJson);

                if (resp.hasOwnProperty('error')) {
                    alert('Error ao consultar CEP: ' + resp.error);
                } else {
                    values.mainAddress.local = resp.logradouro;
                    values.mainAddress.city = resp.localidade;
                    values.mainAddress.state = resp.uf;
                    values.mainAddress.complemento += resp.complemento;
                }
            })
            .catch((err) => {
                alert('Error ao consultar CEP: ' + err.message);
            });

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
                        <h2><Trans>address</Trans></h2>
                        <br />
                        <br />
                        <Form onSubmit={this.continue}>
                            <div className="p-fluid p-formgrid p-grid">
                                <div className="p-field p-col-6">
                                    <InputText id="zipCode" name="zipCode" onChange={handleChange('mainAddress')} value={values.mainAddress.zipCode} required maxLength="20" onBlur={(event) => this.getAddress(event)} placeholder={t('lbl_zipcode')} className="p-d-block" type="text" aria-describedby="zipCode-help" />
                                    <small id="zipCode-help" className="p-invalid p-d-block text-right"><Trans>lbl_zipcode_required</Trans></small>
                                </div>
                                <div className="p-field p-col-12 p-md-6">
                                    <InputNumber id="number" name="number" onValueChange={handleChange('mainAddress')} value={values.mainAddress.number} required aria-describedby="number-help" className="text-right" />
                                    <small id="number-help" className="p-invalid p-d-block text-right"><Trans>lbl_number_required</Trans></small>
                                </div>
                                <div className="p-field p-col-12 p-md-12">
                                    <InputText id="local" name="local" onChange={handleChange('mainAddress')} value={values.mainAddress.local} required placeholder="Local" className="p-d-block" type="text" aria-describedby="local-help" />
                                    <small id="local-help" className="p-invalid p-d-block text-right"><Trans>lbl_local_required</Trans></small>
                                </div>
                                <div className="p-field p-col-6">
                                    <InputText id="complement" name="complement" onChange={handleChange('mainAddress')} value={values.mainAddress.complement} maxLength="255" placeholder={t('lbl_complement')} className="p-d-block" type="text" aria-describedby="complement-help" />
                                    <small id="complement-help" className="p-invalid p-d-block text-right"><Trans>lbl_complement_required</Trans></small>
                                </div>
                                <div className="p-field p-col-12 p-md-6">
                                    <InputText id="country" name="country" onChange={handleChange('mainAddress')} value={values.mainAddress.country} maxLength="140" required placeholder={t('lbl_country')} className="p-d-block" type="text" aria-describedby="country-help" />
                                    <small id="country-help" className="p-invalid p-d-block text-right"><Trans>lbl_country_required</Trans></small>
                                </div>
                                <div className="p-field p-col-12 p-md-6">
                                    <InputText id="state" name="state" onChange={handleChange('mainAddress')} value={values.mainAddress.state} maxLength="20" required placeholder={t('lbl_state')} className="p-d-block" type="text" aria-describedby="state-help" />
                                    <small id="state-help" className="p-invalid p-d-block text-right"><Trans>lbl_state_required</Trans></small>
                                </div>
                                <div className="p-field p-col-12 p-md-6">
                                    <InputText id="city" name="city" onChange={handleChange('mainAddress')} value={values.mainAddress.city} maxLength="140" required placeholder={t('lbl_city')} className="p-d-block" type="text" aria-describedby="city-help" />
                                    <small id="city-help" className="p-invalid p-d-block text-right"><Trans>lbl_city_required</Trans></small>
                                </div>
                                <div className="p-field p-col-12">
                                    <div className="p-field-checkbox">
                                        <Checkbox inputId="hasPhysicalStore" onChange={handleChange('hasPhysicalStore')} checked={values.hasPhysicalStore} />
                                        <label htmlFor="hasPhysicalStore"><Trans>lbl_has_physical_store</Trans></label>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="p-formgroup-inline">
                                <Button
                                    label={t("btn_next")}
                                    type="submit"
                                />
                                <Button
                                    style={{ marginLeft: "10px" }}
                                    label={t("btn_prev")}
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

export default withTranslation()(Address)