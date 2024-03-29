﻿import React, { useState, useRef } from 'react';
import { useDispatch, connect } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import { Form, FormGroup } from 'reactstrap';
import { Dropdown } from 'primereact/dropdown';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Toast } from 'primereact/toast';
import { Trans, useTranslation } from 'react-i18next';
import { customerActions } from '../../_actions/customer.actions';
import util from '../../_helpers/util';

const CustomerContact = (props) => {
    const dispatch = useDispatch();
    const [password, setPwd] = React.useState('');
    const [passwordConf, setPwdConf] = React.useState('');
    const [marital, setMarital] = React.useState(null);
    const [degree, setDegree] = React.useState(null);
    const [gender, setGender] = React.useState('');
    const { stepItems, currentStep } = props;
    const { t } = useTranslation();
    const [customer, setCustomer] = useState(props.customer);
    const toast = useRef(null);

    const handleChange = input => e => {
        const { target } = e;

        setCustomer({
            ...customer,
            [target.name]: target.type === "checkbox" ? target.checked : target.value
        });
    }

    const onDegreeChange = (e) => {
        setDegree(e.value);

        setCustomer({
            ...customer,
            Degree: e.value
        });
    }

    const onGenderChange = (e) => {
        setGender(e.value);

        setCustomer({
            ...customer,
            Gender: e.value
        });
    }

    const onMaritalChange = (e) => {
        setMarital(e.value);

        setCustomer({
            ...customer,
            MaritalStatus: e.value
        });
    }

    const maritalStatusOptions = [
        { name: t('lbl_single'), code: 0 },
        { name: t('lbl_married'), code: 1 },
        { name: t('lbl_separated'), code: 2 },
        { name: t('lbl_divorced'), code: 3 },
        { name: t('lbl_widowed'), code: 4 }
    ];

    const degreeOptions = [
        { name: t('lbl_highschool'), code: 0 },
        { name: t('lbl_college'), code: 1 },
        { name: t('lbl_mba'), code: 2 },
        { name: t('lbl_postgraduate'), code: 3 },
        { name: t('lbl_master'), code: 4 },
        { name: t('lbl_phd'), code: 5 }
    ];

    const genderOptions = [
        { name: t('lbl_female'), code: 0 },
        { name: t('lbl_male'), code: 1 },
    ];

    const handleChangeLocal = (e) => {
        setPwd(e.target.value);
    }

    const handleChangeLocalConf = (e) => {
        setPwdConf(e.target.value);
    }

    const confirm = e => {
        e.preventDefault();
        if (password == passwordConf && util.isPasswordStrong(password)) {
            customer.User.Name = customer.Email;
            customer.User.Password = password;            
            props.nextStep();
            dispatch(customerActions.create(customer));
        } else {
            toast.current.show({ severity: 'warn', summary: t('Error'), detail: t('lbl_pwd_constraint') });
        }
    }

    const back = e => {
        e.preventDefault();
        props.prevStep();
    }

    const getActiveComponent = () => {
        return (
            <div>
                <Toast ref={toast}></Toast>

                <div className="divSteps">
                    <Steps model={stepItems} activeIndex={currentStep} readOnly={true} />
                </div>
                <div className="card">
                    <Form onSubmit={confirm}>
                        <div className="p-fluid">
                            <FormGroup id="grpData" name="grpData">
                                <h4><Trans>lbl_identification</Trans></h4>
                                <br />
                                <div className="p-fluid">
                                    <InputText id="Nickname" name="Nickname" type="text" onChange={handleChange()} value={customer.Nickname} placeholder={t('lbl_nick')} autoFocus/>
                                </div>
                                <div className="p-fluid">
                                    <div className="p-field-checkbox" style={{ marginTop: "20px" }}>
                                        <Checkbox inputId="IsPublic" name="IsPublic" onChange={handleChange()} checked={customer.IsPublic} />
                                        <label htmlFor="IsPublic"><Trans>lbl_is_public_profile</Trans></label>
                                    </div>
                                </div>
                                <div className="p-fluid">
                                    <InputMask id="DocumentNumber" name="DocumentNumber" type="text" mask="999.999.999-99" onChange={handleChange()}
                                        value={customer.DocumentNumber} placeholder={t('lbl_personal_document')} aria-describedby="document-help" />
                                    <small id="document-help" className="p-d-block text-right"><Trans>lbl_document_required</Trans></small>
                                </div>
                                <div className="p-fluid">
                                    <Dropdown id="Gender" name="Gender" value={gender} options={genderOptions} onChange={onGenderChange} optionLabel="name"
                                        placeholder={t('lbl_gender')} optionValue="code" aria-describedby="gender-help" />
                                    <small id="gender-help" className="p-d-block text-right"><Trans>lbl_gender_required</Trans></small>
                                </div>
                                <div className="p-fluid">
                                    <Dropdown id="MaritalStatus" name="MaritalStatus" value={marital} options={maritalStatusOptions}
                                        onChange={onMaritalChange} optionLabel="name" placeholder={t('lbl_marital_status')} optionValue="code" aria-describedby="marital-help" />
                                    <small id="marital-help" className="p-d-block text-right"><Trans>lbl_marital_status_required</Trans></small>
                                </div>
                                <div className="p-fluid">
                                    <Dropdown id="Degree" name="Degree" value={degree} options={degreeOptions} onChange={onDegreeChange} optionLabel="name"
                                        placeholder={t('lbl_degree')} optionValue="code" />
                                </div>
                            </FormGroup>
                            <FormGroup id="grpLogin" name="grpLogin">
                                <h4><Trans>Login</Trans></h4>
                                <div className="p-field">
                                    <label><b>Usuário:&nbsp;</b></label><span>{customer.Email}</span>
                                </div>
                                <div className="p-field">
                                    <div className="p-inputgroup">
                                        <Password id="pwd" name="pwd" placeholder="Senha" value={password} toggleMask onChange={handleChangeLocal} required className={util.isPasswordStrong(password) ? 'p-valid' : 'p-invalid'}
                                            aria-describedby="pwd-help" inline="true" weakLabel={t('lbl_strength_weak')} mediumLabel={t('lbl_strength_medium')} strongLabel={t('lbl_strength_strong')} />
                                    </div>
                                    <small id="pwd-help" className="p-invalid p-d-block text-right"><Trans>lbl_pwd_required</Trans></small>
                                </div>
                                <div className="p-field">
                                    <div className="p-inputgroup">
                                        <Password id="password" name="Password" placeholder={t('lbl_pwd_confirm')} value={passwordConf} toggleMask onChange={handleChangeLocalConf} required
                                            aria-describedby="pwd-help2-help" className={password == passwordConf && util.isPasswordStrong(handleChangeLocalConf) ? 'p-valid' : 'p-invalid'} weakLabel={t('lbl_strength_weak')} mediumLabel={t('lbl_strength_medium')} strongLabel={t('lbl_strength_strong')} />
                                    </div>
                                    <small id="pwd-help2-help" className="p-invalid p-d-block text-right"><Trans>lbl_pwd_required</Trans></small>
                                </div>
                            </FormGroup>
                        </div>
                        <br />
                        <div className="p-formgroup-inline">
                            <Button
                                label={t("btn_confirm")}
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
        )
    }

    return (
        getActiveComponent()
    );
}

function mapStateToProps(state) {
    return {
        customer: state.reducers.customer.customer
    };
}

export default connect(mapStateToProps)(CustomerContact);