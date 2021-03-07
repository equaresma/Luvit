import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import { Form, FormGroup, Label } from 'reactstrap';
import { FileUpload } from 'primereact/fileupload';
import { Trans, useTranslation } from 'react-i18next';
import { vendorActions } from '../../../src/_actions/vendor.actions';

export const SetupStore = (props) => {
    const dispatch = useDispatch();
    const { nextStep, stepItems, currentStep } = props;
    const { t } = useTranslation();
    const [vendor, setVendor] = useState(props.vendor);

    const handleChange = input => e => {
        const { target } = e;
        if (input === 'BankInfo') {
            setVendor({
                ...vendor.BankInfo,
                [target.name]: target.value
            });
        } else {
            setVendor({
                ...vendor,
                [target.name]: target.type === "checkbox" ? target.checked : target.value
            });
        }
    }

    const next = e => {
        e.preventDefault();
        dispatch(vendorActions.incrementVendor(vendor));
        nextStep();
    }

    const back = e => {
        e.preventDefault();
        props.prevStep();
    }

    const onUpload = (e) => {
        vendor.LogoURL = e.xhr.responseText;
    }

    const onError = (e) => {
        alert(e.xhr.responseText);
    }

    const getCleanDoc = () => {
        return vendor.Document.Number.replace('.', '')
            .replace('/', '')
            .replace('-', '');
    }

    return (
        <div>
            <div className="divSteps">
                <Steps model={stepItems} activeIndex={currentStep} readOnly={true} />
            </div>            
            <div className="card">
                <Form onSubmit={next} encType='multipart/form-data'>
                    <div className="p-fluid">
                        <h4><Trans>setup_store</Trans></h4>
                        <br/>
                        <div className="p-field p-col-12">
                            <Label>Logo</Label>
                            <FileUpload mode="basic" name="LogoURL" url={"api/file?name=" + getCleanDoc()} accept="image/*" maxFileSize={60000} onChange={handleChange()} onUpload={onUpload}
                                auto chooseLabel={t('file_browse')} onError={onError} defaultValue={vendor.LogoURL} required />
                            <small id="fileup-help" className="p-invalid p-d-block text-right"><Trans>file_upload_max_size</Trans></small>
                        </div>
                        <div className="p-field p-col-12">
                            <InputText id="webSite" name="WebSite" onChange={handleChange()} value={vendor.WebSite} required maxLength="300" placeholder="Website"
                                type="text" aria-describedby="webSite-help" />
                            <small id="webSite-help" className="p-invalid p-d-block text-right"><Trans>lbl_web_site</Trans></small>
                        </div>
                        <div className="p-field p-col-12">
                            <InputText id="email" name="Email" onChange={handleChange()} value={vendor.Email} required maxLength="150" placeholder="E-mail" className="p-d-block"
                                type="text" aria-describedby="email-help" />
                            <small id="email-help" className="p-invalid p-d-block text-right"><Trans>email_fmt</Trans></small>
                        </div>
                        <FormGroup>
                            <h4><Trans>tit_bank</Trans></h4>
                            <div className="p-fluid p-formgrid p-grid">
                                <div className="p-field p-col-3">
                                    <InputText id="bankCode" name="BankCode" onChange={handleChange('BankInfo')} value={vendor.BankInfo.BankCode} required maxLength="15" placeholder={t('lbl_bank_code')}
                                        className="p-d-block" type="text" aria-describedby="bankCode-help" />
                                    <small id="bankCode-help" className="p-invalid p-d-block text-right"><Trans>lbl_bank_code</Trans></small>
                                </div>
                                <div className="p-field p-col-3">
                                    <InputText id="bankBranch" name="BankBranch" onChange={handleChange('BankInfo')} value={vendor.BankInfo.BankBranch} required maxLength="30"
                                        placeholder={t('lbl_bank_branch')} className="p-d-block" type="text" aria-describedby="bankBranch-help" />
                                    <small id="bankBranch-help" className="p-invalid p-d-block text-right"><Trans>lbl_bank_branch</Trans></small>
                                </div>
                                <div className="p-field p-col-3">
                                    <InputText id="accoundNumber" name="AccountNumber" onChange={handleChange('BankInfo')} value={vendor.BankInfo.AccountNumber} required maxLength="30"
                                        placeholder={t('lbl_bank_account')} className="p-d-block" type="text" aria-describedby="accoundNumber-help" />
                                    <small id="accoundNumber-help" className="p-invalid p-d-block text-right"><Trans>lbl_bank_account</Trans></small>
                                </div>
                            </div>
                        </FormGroup>
                    </div>
                    <br />
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
                </Form>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return { vendor: state.vendor.vendor };
}

export default connect(mapStateToProps)(SetupStore);