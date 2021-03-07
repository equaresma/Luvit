import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import { Form, FormGroup } from 'reactstrap';
import { Password } from 'primereact/password';
import { Trans, useTranslation } from 'react-i18next';
import { vendorActions } from '../../../src/_actions/vendor.actions';
import util from '../../../src/_helpers/util';

export const Contact = (props) => {
    const dispatch = useDispatch();
    const [password, setPwd] = React.useState('');
    const [passwordConf, setPwdConf] = React.useState('');
    const { stepItems, currentStep } = props;
    const { t } = useTranslation();
    const [vendor, setVendor] = useState(props.vendor);

    const handleChange = input => e => {
        const { target } = e;

        if (input === "Contact") {
            const doc = {
                ...vendor.Contact,
                [target.name]: target.value
            }

            setVendor({
                ...vendor,
                Document: doc
            });

        } else {
            setVendor({
                ...vendor,
                [target.name]: target.type === "checkbox" ? target.checked : target.value
            });
        }
    }

    const handleChangeLocal = (e) => {
        setPwd(e.target.value);
    }

    const handleChangeLocalConf = (e) => {
        setPwdConf(e.target.value);
    }

    const confirm = e => {
        e.preventDefault();
        if (password == passwordConf && util.isPasswordStrong(password)) {
            vendor.Contact.User.Name = vendor.Email;
            vendor.Contact.User.Password = password;
            dispatch(vendorActions.create(vendor));
        } else {
            alert(t('lbl_pwd_constraint'));
        }
    }

    const back = e => {
        e.preventDefault();
        props.prevStep();
    }

    const getActiveComponent = () => {
        return (
            <div>
                <div className="divSteps">
                    <Steps model={stepItems} activeIndex={currentStep} readOnly={true} />
                </div>
                <div className="card">
                    <Form onSubmit={confirm}>
                        <div className="p-fluid">
                            <FormGroup id="grpLogin" name="grpLogin">
                                <h4><Trans>Contato</Trans></h4>
                                <br />
                                <div className="p-fluid p-formgrid p-grid">
                                    <div className="p-field p-col-4">
                                        <InputText id="firstName" name="FirstName" type="text" onChange={handleChange('Contact')} value={vendor.Contact.FirstName}
                                            placeholder={t('lbl_name')} />
                                    </div>
                                    <div className="p-field p-col-4">
                                        <InputText id="middleName" name="MiddleName" type="text" onChange={handleChange('Contact')} value={vendor.Contact.MiddleName}
                                            placeholder={t('lbl_middle_name')} />
                                    </div>
                                    <div className="p-field p-col-4">
                                        <InputText id="familyName" name="FamilyName" type="text" onChange={handleChange('Contact')} value={vendor.Contact.FamilyName}
                                            placeholder={t('lbl_family_name')} />
                                    </div>
                                    <div className="p-field p-col-12">
                                        <InputText id="email" name="Email" type="text" onChange={handleChange('Contact')} value={vendor.Contact.Email} placeholder="E-mail"
                                            aria-describedby="email-help" />
                                        <small id="email-help" className="p-invalid p-d-block text-right"><Trans>email_fmt</Trans></small>
                                    </div>
                                    <div className="p-field p-col-6">
                                        <InputMask id="phone" name="Phone" mask="+99(99) 9999-9999" onChange={handleChange('Contact')} value={vendor.Contact.Phone}
                                            placeholder={t('phone')} />
                                        <small id="mainPhone-help" className="p-d-block text-right"><Trans>phone_fmt</Trans></small>
                                    </div>
                                    <div className="p-field p-col-6">
                                        <InputMask id="mobile" name="Mobile" mask="+99(99) 99999-9999" onChange={handleChange('Contact')} value={vendor.Contact.Mobile}
                                            placeholder={t('mobile')} />
                                        <small id="mobile-help" className="p-d-block text-right"><Trans>mobile_fmt</Trans></small>
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup id="grpLogin" name="grpLogin">
                                <h4><Trans>Login</Trans></h4>
                                <div className="p-field">
                                    <label><b>Usuário:&nbsp;</b></label><span>{vendor.Email}</span>
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

    return (getActiveComponent());
}
function mapStateToProps(state) {
    return { vendor: state.vendor.vendor };
}

export default connect(mapStateToProps)(Contact);