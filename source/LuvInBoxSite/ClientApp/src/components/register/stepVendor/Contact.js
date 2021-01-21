import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import { Form, FormGroup } from 'reactstrap';
import { Password } from 'primereact/password';
import { Trans, useTranslation } from 'react-i18next';

export const Contact = (props) => {
    const [hidden, setHidden] = React.useState(true);
    const [hidden2, setHidden2] = React.useState(true);
    const [password, setPwd] = React.useState('');
    const [edit, setEdit] = React.useState(true);
    const { handleChange, stepItems, currentStep, vendor, save } = props;
    const { t } = useTranslation();

    const toggleShow = () => {
        setHidden(!hidden);
    }

    const toggleShow2 = () => {
        setHidden2(!hidden2);
    }

    const handleChangeLocal = (e) => {
        setPwd(e.target.value);
    }

    const confirm = e => {
        e.preventDefault();
        save();
    }

    const back = e => {
        e.preventDefault();
        props.prevStep();
    }

    const getActiveComponent = () => {
        if (edit) {
            return (
                <div>
                    <div>
                        <Steps model={stepItems} activeIndex={currentStep} readOnly={true} />
                        <br />
                        <br />
                    </div>
                    <h4><Trans>comercial_contact</Trans></h4>
                    <br />
                    <br />
                    <Form onSubmit={confirm}>
                        <div className="p-fluid">
                            <FormGroup id="grpLogin" name="grpLogin">
                                <h4><Trans>Contato</Trans></h4>
                                <div className="p-fluid p-formgrid p-grid">
                                    <div className="p-field p-col-4">
                                        <InputText id="firstName" name="FirstName" type="text" onChange={handleChange('Contact')} defaultValue={vendor.Contact.FirstName}
                                            placeholder={t('lbl_name')} />
                                    </div>
                                    <div className="p-field p-col-4">
                                        <InputText id="middleName" name="MiddleName" type="text" onChange={handleChange('Contact')} defaultValue={vendor.Contact.MiddleName}
                                            placeholder={t('lbl_middle_name')} />
                                    </div>
                                    <div className="p-field p-col-4">
                                        <InputText id="familyName" name="FamilyName" type="text" onChange={handleChange('Contact')} defaultValue={vendor.Contact.FamilyName}
                                            placeholder={t('lbl_last_name')} />
                                    </div>
                                    <div className="p-field p-col-12">
                                        <InputText id="email" name="Email" type="text" onChange={handleChange('Contact')} defaultValue={vendor.Contact.Email} placeholder="E-mail"
                                            aria-describedby="email-help" />
                                        <small id="email-help" className="p-invalid p-d-block text-right"><Trans>email_fmt</Trans></small>
                                    </div>
                                    <div className="p-field p-col-6">
                                        <InputMask id="phone" name="Phone" mask="+99(99) 9999-9999" onValueChange={handleChange('Phone')} defaultValue={vendor.Contact.Phone}
                                            placeholder={t('phone')} />
                                        <small id="mainPhone-help" className="p-d-block text-right"><Trans>phone_fmt</Trans></small>
                                    </div>
                                    <div className="p-field p-col-6">
                                        <InputMask id="mobile" name="Mobile" mask="+99(99) 99999-9999" onValueChange={handleChange('Mobile')} defaultValue={vendor.Contact.Mobile}
                                            placeholder={t('mobile')} />
                                        <small id="mobile-help" className="p-d-block text-right"><Trans>mobile_fmt</Trans></small>
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup id="grpLogin" name="grpLogin">
                                <h4><Trans>Login</Trans></h4>
                                <div className="p-field">
                                    <div className="p-inputgroup">
                                        <InputText id="txtPwd" name="txtPwd" type="text" placeholder="Senha" defaultValue={password} onChange={handleChangeLocal} required
                                            hidden={hidden2} />
                                        <Password id="pwd" name="pwd" placeholder="Senha" defaultValue={password} onChange={handleChangeLocal} required
                                            hidden={!hidden2} aria-describedby="country-help" inline="true" />
                                        <Button type="button" icon="pi pi-eye" className="p-button-sm p-button-text p-button-plain" onClick={toggleShow2} />
                                    </div>
                                    <small id="country-help" className="p-invalid p-d-block text-right"><Trans>lbl_country_required</Trans></small>
                                </div>
                                <div className="p-field">
                                    <div className="p-inputgroup">
                                        <InputText id="txtPassword" name="txtPassword" type="text" placeholder="Confirme a Senha" defaultValue={vendor.Contact.Login.Password}
                                            onChange={handleChange('Login')} required hidden={hidden} className={password == vendor.Contact.Login.Password ? 'p-valid' : 'p-invalid'} />
                                        <Password id="password" name="Password" placeholder="Confirme a Senha" defaultValue={vendor.Contact.Login.Password}
                                            onChange={handleChange('Login')} required hidden={!hidden} aria-describedby="country2-help" className={password == vendor.Contact.Login.Password ? 'p-valid' : 'p-invalid'} />
                                        <Button type="button" icon="pi pi-eye" className="p-button-sm p-button-text p-button-plain" onClick={toggleShow} />
                                    </div>
                                    <small id="country2-help" className="p-invalid p-d-block text-right"><Trans>lbl_country_required</Trans></small>
                                </div>
                            </FormGroup>
                        </div>
                        <br />
                        <div className="p-formgroup-inline">
                            <Button
                                label={t("Confirm")}
                                type="button"
                                onClick={confirm}
                            />
                            <Button
                                style={{ marginLeft: "10px" }}
                                label={t("Back")}
                                type="button"
                                onClick={back}
                            />
                        </div>
                    </Form>
                </div>
            )
        } else {
            return (
                <div>
                    <h3><Trans>lbl_confirmation</Trans></h3>
                </div>
            )
        }
    }

    return (getActiveComponent());
}
