import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import { Form, FormGroup } from 'reactstrap';
import { Password } from 'primereact/password';
import { Trans, withTranslation } from 'react-i18next';
import axios from 'axios';

import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

export class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hidden: true,
            hidden2: true,
            password: '',
            edit: true
        }

        this.toggleShow = this.toggleShow.bind(this);
        this.toggleShow2 = this.toggleShow2.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleShow() {
        this.setState({
            hidden: !this.state.hidden
        });
    }

    toggleShow2 = () => {
        this.setState({
            hidden2: !this.state.hidden2
        });
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }


    confirm = e => {
        const { values } = this.props;

        if (values.contact.login.password !== this.state.password) {
            alert('Password does not matched');
            return false;
        }

        //submit
        const { name, fantasyName, foundedIn, logoURL, webSite, documentNumber, mainAddress, mainPhone, mobile, hasPhysicalStore, contact, bankInfo } = values;
        const vendor = { name, fantasyName, foundedIn, logoURL, webSite, documentNumber, mainAddress, mainPhone, mobile, hasPhysicalStore, contact, bankInfo };
        //vendor.contact.login.userName = vendor.contact.email;

        var instance = axios.create({ baseURL: 'https://localhost:44397' });
        var json = JSON.stringify(vendor);

        instance.post("/api/Vendor/", json)
            .then((response) => {
                this.setState({
                    edit: false
                });
            })
            .catch((err) => {
                alert('Error ' + err.message);
            });
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    componentDidMount() {
        if (this.props.password) {
            this.setState({ password: this.props.password });
        }
    }

    render() {
        const { values, handleChange, stepItems, currentStep } = this.props;
        const { t } = this.props;

        return (
            <React.Fragment >
                <div className="row" style={!this.state.edit ? {} : { display: 'none' }}>
                    <div className="col-12">
                        <h1><Trans>lbl_confirmation</Trans></h1>
                    </div>
                </div>
                <div className="row" style={this.state.edit ? {} : { display: 'none' }}>
                    <div className="col-lg-12">
                        <div>
                            <Steps model={stepItems} activeIndex={currentStep} readOnly={true} />
                            <br />
                            <br />
                        </div>
                        <h2><Trans>comercial_contact</Trans></h2>
                        <br />
                        <br />
                        <Form onSubmit={this.continue}>
                            <div className="p-fluid">
                                <FormGroup id="grpLogin" name="grpLogin">
                                    <h4><Trans>Contato</Trans></h4>
                                    <div className="p-fluid p-formgrid p-grid">
                                        <div className="p-field p-col-4">
                                            <InputText id="firstName" name="firstName" type="text" onChange={handleChange('contact')} defaultValue={values.contact.firstName} placeholder={t('lbl_name')}/>
                                        </div>
                                        <div className="p-field p-col-4">
                                            <InputText id="middleName" name="middleName" type="text" onChange={handleChange('contact')} defaultValue={values.contact.middleName} placeholder={t('lbl_middle_name')}/>
                                        </div>
                                        <div className="p-field p-col-4">
                                            <InputText id="familyName" name="familyName" type="text" onChange={handleChange('contact')} defaultValue={values.contact.familyName} placeholder={t('lbl_last_name')} />
                                        </div>
                                        <div className="p-field p-col-12">
                                            <InputText id="email" name="email" type="text" onChange={handleChange('contact')} defaultValue={values.contact.email} placeholder="E-mail" aria-describedby="email-help"/>
                                            <small id="email-help" className="p-invalid p-d-block text-right"><Trans>email_fmt</Trans></small>
                                        </div>
                                        <div className="p-field p-col-6">
                                            <InputMask id="phone" name="phone" mask="+99(99) 9999-9999" onValueChange={handleChange('phone')} defaultValue={values.contact} placeholder={t('phone')} />
                                            <small id="mainPhone-help" className="p-d-block text-right"><Trans>phone_fmt</Trans></small>
                                        </div>
                                        <div className="p-field p-col-6">
                                            <InputMask id="mobile" name="mobile" mask="+99(99) 9999-9999" onValueChange={handleChange('mobile')} defaultValue={values.contact} placeholder={t('mobile')} />
                                            <small id="mobile-help" className="p-d-block text-right"><Trans>mobile_fmt</Trans></small>
                                        </div>
                                    </div>
                                </FormGroup>
                                <FormGroup id="grpLogin" name="grpLogin">
                                    <h4><Trans>Login</Trans></h4>
                                    <div className="p-field">
                                        <div className="p-inputgroup">
                                            <InputText id="txtPwd" name="txtPwd" type="text" placeholder="Senha" defaultValue={this.state.password} onChange={this.handleChange} required hidden={this.state.hidden2} />
                                            <Password id="pwd" name="pwd" placeholder="Senha" defaultValue={this.state.password} onChange={this.handleChange} required hidden={!this.state.hidden2} aria-describedby="country-help" inline="true" />
                                            <Button type="button" icon="pi pi-eye" className="p-button-sm p-button-text p-button-plain" onClick={this.toggleShow2} />
                                        </div>
                                        <small id="country-help" className="p-invalid p-d-block text-right"><Trans>lbl_country_required</Trans></small>
                                    </div>
                                    <div className="p-field">
                                        <div className="p-inputgroup">
                                            <InputText id="txtPassword" name="txtPassword" type="text" placeholder="Confirme a Senha" defaultValue={values.contact.login.password} onChange={handleChange('login')} required hidden={this.state.hidden} className={this.state.password == values.contact.login.password ? 'p-valid' : 'p-invalid'} />
                                            <Password id="password" name="password" placeholder="Confirme a Senha" value={values.contact.login.password} onChange={handleChange('login')} required hidden={!this.state.hidden} aria-describedby="country2-help" className={this.state.password == values.contact.login.password ? 'p-valid' : 'p-invalid'} />
                                            <Button type="button" icon="pi pi-eye" className="p-button-sm p-button-text p-button-plain" onClick={this.toggleShow} />
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
                                    onClick={this.confirm}
                                />
                                <Button
                                    style={{ marginLeft: "10px" }}
                                    label={t("Back")}
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

export default withTranslation()(Contact)