import React, { useState, useRef } from 'react';
import { useDispatch, connect } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import { Form, FormGroup, Label } from 'reactstrap';
import ReactFileReader from 'react-file-reader';
import { Trans, useTranslation } from 'react-i18next';
import { vendorActions } from '../../../src/_actions/vendor.actions';

export const SetupStore = (props) => {
    const dispatch = useDispatch();
    const { nextStep, stepItems, currentStep } = props;
    const { t } = useTranslation();
    const [vendor, setVendor] = useState(props.vendor);
    const toast = useRef(null);
    const [ img, setImg ] = useState(null);

    const handleChange = input => e => {
        const { target } = e;
        if (input === 'BankInfo') {

            const bank = {
                ...vendor.BankInfo,
                [target.name]: target.value
            }

            setVendor({
                ...vendor,
                BankInfo: bank
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
        toast.current.show({ severity: 'info', summary: t('Success'), detail: t('msg_fileup_success') });
    }

    const onError = (e) => {
        toast.current.show({ severity: 'error', summary: t('Error'), detail: `${t('msg_fileup_error')} ${e.xhr.responseText}` });
    }

    const getCleanDoc = () => {
        if (vendor.DocumentNumber)
            return vendor.DocumentNumber
                .replace('.', '')
                .replace('/', '')
                .replace('-', '');

        return "";
    }

    const handleImgFile = (files) => {
        let _vendor = { ...vendor };

        _vendor.LogoType = {
            type: 1,
            value: JSON.stringify(files.base64)
        };

        setImg(files.base64);
        setVendor(_vendor);

        toast.current.show({ severity: 'success', summary: 'File', files, life: 3000 });
    }
    
    return (
        <div>
            <Toast ref={toast}></Toast>

            <div className="divSteps">
                <Steps model={stepItems} activeIndex={currentStep} readOnly={true} />
            </div>
            <div className="card">
                <Form onSubmit={next} encType='multipart/form-data'>
                    <div className="p-fluid">
                        <h4><Trans>setup_store</Trans></h4>
                        <br />
                        <div className="p-field p-col-12">
                            <Label>Logo</Label>
                            <ReactFileReader fileTypes="image/*" base64={true} handleFiles={handleImgFile}>
                                <Button label={t('lbl_import')} icon="pi pi-plus" className="p-button-plain p-mr-2" />
                            </ReactFileReader>
                            <img src={img} onError={(e) => e.target.src = 'images/not-founded.png'} style={{ maxHeight: 60, marginTop: 10 }} />
                            <small id="fileup-help" className="p-invalid p-d-block text-right"><Trans>file_upload_max_size</Trans></small>
                        </div>
                        <div className="p-field p-col-12">
                            <InputText id="webSite" name="WebSite" onChange={handleChange()} value={vendor.WebSite} required maxLength="300" placeholder="Website"
                                type="text" aria-describedby="webSite-help" />
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
    return { vendor: state.reducers.vendor.vendor };
}

export default connect(mapStateToProps)(SetupStore);