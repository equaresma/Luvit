import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Steps } from 'primereact/steps';
import { Trans, useTranslation } from 'react-i18next';
import { Form } from 'reactstrap';
import AddressService from '../../../service/AddressService';

import 'primeflex/primeflex.css';

export const Address = (props) => {
    const { handleChange, stepItems, currentStep } = props;
    const [vendor, setVendor] = React.useState(props.vendor);
    const [address, setAddress] = React.useState(props.vendor.MainAddress);
    const { t } = useTranslation();

    const next = e => {
        e.preventDefault();
        props.nextStep();
    }

    const back = e => {
        e.preventDefault();
        props.prevStep();
    }

    const getAddress = event => {
        const addressService = new AddressService();

        addressService.getAddressByCEP(event.target.value)
            .then((response) => {
                let strJson = response.data.replace('?', '').replace('(', '').replace(')', '').replace(';', '');
                let resp = JSON.parse(strJson);

                if (resp.hasOwnProperty('error')) {
                    alert('Error ao consultar CEP: ' + resp.error);
                } else {
                    setAddress({
                        Local: resp.logradouro,
                        City: resp.localidade,
                        State: resp.uf,
                        Complemento: resp.complemento
                    });

                    setVendor({
                        MainAddress: address   
                    });
                }
            })
            .catch((err) => {
                alert('Erro ao consultar CEP: ' + err.message);
            });
    }

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
                    <Form onSubmit={next}>
                        <div className="p-fluid p-formgrid p-grid">
                            <div className="p-field p-col-6">
                                <InputText id="zipCode" name="ZipCode" type="text" onChange={handleChange('MainAddress')} defaultValue={address.ZipCode} required maxLength="20" placeholder={t('lbl_zipcode')}
                                    className="p-d-block" type="text" aria-describedby="zipCode-help" onBlur={(event) => getAddress(event)} tabIndex="1" />
                                <small id="zipCode-help" className="p-invalid p-d-block text-right"><Trans>lbl_zipcode_required</Trans></small>
                            </div>
                            <div className="p-field p-col-12 p-md-6">
                                <InputNumber id="number" name="Number" onValueChange={handleChange('MainAddress')} defaultValue={address.Number} required
                                    aria-describedby="number-help" className="text-right" tabIndex="2" />
                                <small id="number-help" className="p-invalid p-d-block text-right"><Trans>lbl_number_required</Trans></small>
                            </div>
                            <div className="p-field p-col-12 p-md-12">
                                <InputText id="local" name="Local" type="text" onChange={handleChange('MainAddress')} defaultValue={address.Local} required
                                    placeholder="Local" className="p-d-block" type="text" aria-describedby="local-help" tabIndex="3" />
                                <small id="local-help" className="p-invalid p-d-block text-right"><Trans>lbl_local_required</Trans></small>
                            </div>
                            <div className="p-field p-col-6">
                                <InputText id="complement" name="Complement" type="text" onChange={handleChange('MainAddress')} defaultValue={address.Complement}
                                    maxLength="255" placeholder={t('lbl_complement')} className="p-d-block" type="text" aria-describedby="complement-help" tabIndex="4" />
                                <small id="complement-help" className="p-invalid p-d-block text-right"><Trans>lbl_complement_required</Trans></small>
                            </div>
                            <div className="p-field p-col-12 p-md-6">
                                <InputText id="country" name="Country" type="text" onChange={handleChange('MainAddress')} defaultValue={address.Country} maxLength="140"
                                    required placeholder={t('lbl_country')} className="p-d-block" type="text" aria-describedby="country-help" tabIndex="5" />
                                <small id="country-help" className="p-invalid p-d-block text-right"><Trans>lbl_country_required</Trans></small>
                            </div>
                            <div className="p-field p-col-12 p-md-6">
                                <InputText id="state" name="State" type="text" onChange={handleChange('MainAddress')} defaultValue={address.State} maxLength="20" required placeholder={t('lbl_state')}
                                    className="p-d-block" type="text" aria-describedby="state-help" tabIndex="6" />
                                <small id="state-help" className="p-invalid p-d-block text-right"><Trans>lbl_state_required</Trans></small>
                            </div>
                            <div className="p-field p-col-12 p-md-6">
                                <InputText id="city" name="City" type="text" onChange={handleChange('MainAddress')} defaultValue={address.City} maxLength="140" required
                                    placeholder={t('lbl_city')} className="p-d-block" type="text" aria-describedby="city-help" tabIndex="7" />
                                <small id="city-help" className="p-invalid p-d-block text-right"><Trans>lbl_city_required</Trans></small>
                            </div>
                            <div className="p-field p-col-12">
                                <div className="p-field-checkbox">
                                    <Checkbox inputId="hasPhysicalStore" name="HasPhysicalStore" onChange={handleChange('HasPhysicalStore')} checked={address.HasPhysicalStore} tabIndex="8" />
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
                                onClick={back}
                            />
                        </div>
                    </Form>
                </div>
            </div>
        </React.Fragment >
    );
}

//export default withTranslation()(Address)