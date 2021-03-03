import React, {useState} from 'react';
import { useDispatch, connect } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import { Form, FormGroup } from 'reactstrap';
import { Dropdown } from 'primereact/dropdown';
import { Password } from 'primereact/password';
import { Trans, useTranslation } from 'react-i18next';
import { customerActions } from '../../../src/_actions/customer.actions';

const CustomerContact = (props) => {
    const dispatch = useDispatch();
    const [hidden, setHidden] = React.useState(true);
    const [hidden2, setHidden2] = React.useState(true);
    const [password, setPwd] = React.useState('');
    const [edit, setEdit] = React.useState(true);
    const { stepItems, currentStep} = props;
    const { t } = useTranslation();
    const [customer, setCustomer] = useState(props.customer);

    const handleChange = input => e => {
        const { target } = e;
        setCustomer({
            ...customer,
            [target.name]: target.type === "checkbox" ? target.checked : target.value
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
        dispatch(customerActions.createCustomer(customer));
    }

    const back = e => {
        e.preventDefault();
        props.prevStep();
    }

    const getActiveComponent = () => {
        if (edit) {
            return (
                <div>
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
                                        <InputMask id="Number" name="Number" type="text" mask="999.999.999-99" onChange={handleChange('Document')}
                                            value={customer.Document.Number} placeholder={t('lbl_document')} aria-describedby="document-help" />
                                        <small id="document-help" className="p-d-block text-right"><Trans>lbl_document_required</Trans></small>
                                    </div>
                                    <div className="p-fluid">
                                        <Dropdown id="Gender" name="Gender" value={customer.Gender} options={genderOptions} onChange={handleChange()} optionLabel="name"
                                            placeholder={t('lbl_gender')} optionValue="code" aria-describedby="gender-help" />
                                        <small id="gender-help" className="p-d-block text-right"><Trans>lbl_gender_required</Trans></small>
                                    </div>
                                    <div className="p-fluid">
                                        <Dropdown id="MaritalStatus" name="MaritalStatus" value={customer.MaritalStatus} options={maritalStatusOptions}
                                            onChange={handleChange()} optionLabel="name" placeholder={t('lbl_marital_status')} optionValue="code" aria-describedby="marital-help" />
                                        <small id="marital-help" className="p-d-block text-right"><Trans>lbl_marital_status_required</Trans></small>
                                    </div>
                                    <div className="p-fluid">
                                        <Dropdown id="Degree" name="Degree" value={customer.Degree} options={degreeOptions} onChange={handleChange()} optionLabel="name"
                                            placeholder={t('lbl_degree')} optionValue="code" />
                                    </div>
                                </FormGroup>
                                <FormGroup id="grpLogin" name="grpLogin">
                                    <h4><Trans>Login</Trans></h4>
                                    <div className="p-field">
                                        <div className="p-inputgroup">
                                            <InputText id="txtPwd" name="txtPwd" type="text" placeholder="Senha" value={password} onChange={handleChangeLocal} required
                                                hidden={hidden2} />
                                            <Password id="pwd" name="pwd" placeholder="Senha" value={password} onChange={handleChangeLocal} required
                                                hidden={!hidden2} aria-describedby="country-help" inline="true" />
                                            <Button type="button" icon="pi pi-eye" className="p-button-sm p-button-text p-button-plain" onClick={toggleShow2} />
                                        </div>
                                        <small id="country-help" className="p-invalid p-d-block text-right"><Trans>lbl_pwd_required</Trans></small>
                                    </div>
                                    <div className="p-field">
                                        <div className="p-inputgroup">
                                            <InputText id="txtPassword" name="txtPassword" type="text" placeholder={t('lbl_pwd_confirm')} value={customer.Login.Password}
                                                onChange={handleChange('Login')} required hidden={hidden} className={password == customer.Login.Password ? 'p-valid' : 'p-invalid'} />
                                            <Password id="password" name="Password" placeholder={t('lbl_pwd_confirm')} value={customer.Login.Password}
                                                onChange={handleChange('Login')} required hidden={!hidden} aria-describedby="country2-help" className={password == customer.Login.Password ? 'p-valid' : 'p-invalid'} />
                                            <Button type="button" icon="pi pi-eye" className="p-button-sm p-button-text p-button-plain" onClick={toggleShow} />
                                        </div>
                                        <small id="country2-help" className="p-invalid p-d-block text-right"><Trans>lbl_pwd_required</Trans></small>
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

function mapStateToProps(state) {
    return { customer: state.customer.customer };
}

export default connect(mapStateToProps)(CustomerContact);