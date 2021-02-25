import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Steps } from 'primereact/steps';
import { Trans, useTranslation } from 'react-i18next';
import { Form } from 'reactstrap';
import AddressService from '../../../service/addressService';

export const Address = (props) => {
    const { upDateAddress, handleChange, stepItems, currentStep } = props;
    const [vendor, setVendor] = useState(props.vendor);
    const [address, setAddress] = useState(vendor.MainAddress);
    const { t } = useTranslation();

    const next = e => {
        e.preventDefault();
        props.nextStep();
    }

    const back = e => {
        e.preventDefault();
        props.prevStep();
    }

    const getAddress = e => {
        const addressService = new addressService();
        const cep = e.target.value;

        addressService.getAddressByCEP(cep)
            .then((response) => {
                let strJson = response.data.replace('?', '').replace('(', '').replace(')', '').replace(';', '');
                let dados = JSON.parse(strJson);

                if (dados.hasOwnProperty('error')) {
                    alert('Erro ao consultar CEP: ' + dados.error);
                } else {
                    let nAdd = {
                        Local: dados.logradouro,
                        Number: 0,
                        Complement: dados.complemento + ' ' + dados.bairro,
                        City: dados.localidade,
                        State: dados.uf,
                        ZipCode: cep,
                        Country: 'Brasil'
                    };

                    setAddress(nAdd);
                    vendor.MainAddress = nAdd;
                    setVendor(vendor);
                    upDateAddress(nAdd);
                }
            })
            .catch((err) => {
                alert('Erro ao consultar CEP: ' + err.message);
            });
    }

    return (
        <div>
            <div className="divSteps">
                <Steps model={stepItems} activeIndex={currentStep} readOnly={true} />
            </div>
            <div className="divSteps">
                <Form onSubmit={next}>
                    <div className="p-fluid p-formgrid p-grid">
                        <h4><Trans>address</Trans></h4>
                        <br/>
                        <div className="p-field p-col-6">
                            <InputText id="ZipCode" name="ZipCode" type="text" onChange={handleChange('MainAddress')} defaultValue={address.ZipCode} required
                                maxLength="20" placeholder={t('lbl_zipcode')} className="p-d-block" type="text" aria-describedby="zipCode-help" onBlur={getAddress} />
                            <small id="zipCode-help" className="p-invalid p-d-block text-right"><Trans>lbl_zipcode_required</Trans></small>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <InputNumber id="Number" name="Number" onValueChange={handleChange('MainAddress')} defaultValue={address.Number} required
                                aria-describedby="number-help" className="text-right" />
                            <small id="number-help" className="p-invalid p-d-block text-right"><Trans>lbl_number_required</Trans></small>
                        </div>
                        <div className="p-field p-col-12 p-md-12">
                            <InputText id="Local" name="Local" type="text" onChange={handleChange('MainAddress')} defaultValue={address.Local} required
                                placeholder="Local" className="p-d-block" type="text" aria-describedby="local-help" />
                            <small id="local-help" className="p-invalid p-d-block text-right"><Trans>lbl_local_required</Trans></small>
                        </div>
                        <div className="p-field p-col-6">
                            <InputText id="Complement" name="Complement" type="text" onChange={handleChange('MainAddress')} defaultValue={address.Complement}
                                maxLength="255" placeholder={t('lbl_complement')} className="p-d-block" type="text" aria-describedby="complement-help" />
                            <small id="complement-help" className="p-invalid p-d-block text-right"><Trans>lbl_complement_required</Trans></small>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <InputText id="Country" name="Country" type="text" onChange={handleChange('MainAddress')} defaultValue={address.Country} maxLength="140"
                                required placeholder={t('lbl_country')} className="p-d-block" type="text" aria-describedby="country-help" />
                            <small id="country-help" className="p-invalid p-d-block text-right"><Trans>lbl_country_required</Trans></small>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <InputText id="State" name="State" type="text" onChange={handleChange('MainAddress')} defaultValue={address.State} maxLength="20" required placeholder={t('lbl_state')}
                                className="p-d-block" type="text" aria-describedby="state-help" />
                            <small id="state-help" className="p-invalid p-d-block text-right"><Trans>lbl_state_required</Trans></small>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <InputText id="City" name="City" type="text" onChange={handleChange('MainAddress')} defaultValue={address.City} maxLength="140" required
                                placeholder={t('lbl_city')} className="p-d-block" type="text" aria-describedby="city-help" />
                            <small id="city-help" className="p-invalid p-d-block text-right"><Trans>lbl_city_required</Trans></small>
                        </div>
                        <div className="p-field p-col-12">
                            <div className="p-field-checkbox">
                                <Checkbox inputId="HasPhysicalStore" name="HasPhysicalStore" onChange={handleChange('HasPhysicalStore')} checked={props.vendor.HasPhysicalStore} />
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
    );
}