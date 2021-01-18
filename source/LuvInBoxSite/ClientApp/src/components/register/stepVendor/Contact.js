import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import { Form, FormGroup } from 'reactstrap';
import { Password } from 'primereact/password';
import { Trans, withTranslation } from 'react-i18next';

import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

export class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hidden: true,
            hidden2: true,
            password: ''
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


    continue = e => {
        const { values } = this.props;

        if (values.contact.login.password !== this.state.password) {
            alert('Password does not matched');
            return false;
        }

        e.preventDefault();
        this.props.nextStep();
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

        return (
            <React.Fragment>
                <div className="row">
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
                                <div className="p-field">
                                    <label htmlFor="contact">Contact Name</label>
                                    <InputText id="contact" onChange={handleChange('contact')} defaultValue={values.contact} />
                                </div>
                                <div className="p-field">
                                    <label htmlFor="contact">Contact Name</label>
                                    <InputText id="contact" onChange={handleChange('contact')} defaultValue={values.contact} />
                                </div>
                                <div className="p-field">
                                    <label htmlFor="contact">Contact Name</label>
                                    <InputText id="contact" onChange={handleChange('contact')} defaultValue={values.contact} />
                                </div>
                                <div className="p-field">
                                    <label htmlFor="contact">Contact Name</label>
                                    <InputText id="contact" onChange={handleChange('contact')} defaultValue={values.contact} />
                                </div>
                                <FormGroup id="grpLogin" name="grpLogin">
                                    <h4><Trans>Login</Trans></h4>
                                    <div className="p-field">
                                        <div className="p-inputgroup">
                                            <InputText id="txtPwd" name="txtPwd" placeholder="Senha" defaultValue={this.state.password} onChange={this.handleChange} required hidden={this.state.hidden2} />
                                            <Password id="pwd" name="pwd" placeholder="Senha" defaultValue={this.state.password} onChange={this.handleChange} required hidden={!this.state.hidden2} aria-describedby="country-help" inline="true" className="p-d-block" />
                                            <Button type="button" icon="pi pi-eye" className="p-button-sm p-button-text p-button-plain" onClick={this.toggleShow2} />
                                        </div>
                                        <small id="country-help" className="p-invalid p-d-block text-right"><Trans>lbl_country_required</Trans></small>
                                    </div>
                                    <div className="p-field">
                                        <div className="p-inputgroup">
                                            <InputText id="txtPassword" name="txtPassword" placeholder="Confirme a Senha" defaultValue={values.contact.login.password} onChange={handleChange('login')} required hidden={this.state.hidden} className={this.state.password == values.contact.login.password ? 'p-valid' : 'p-invalid' }/>
                                            <Password id="password" name="password" placeholder="Confirme a Senha" value={values.contact.login.password} onChange={handleChange('login')} required hidden={!this.state.hidden} aria-describedby="country2-help" className={this.state.password == values.contact.login.password ? 'p-valid' : 'p-invalid'}/>
                                            <Button type="button" icon="pi pi-eye" className="p-button-sm p-button-text p-button-plain" onClick={this.toggleShow} />
                                        </div>
                                        <small id="country2-help" className="p-invalid p-d-block text-right"><Trans>lbl_country_required</Trans></small>
                                    </div>
                                </FormGroup>
                            </div>
                            <br />
                            <div className="p-formgroup-inline">
                                <Button
                                    label="Continue"
                                    type="button"
                                    onClick={this.continue}
                                />
                                <Button
                                    style={{ marginLeft: "10px" }}
                                    label="Back"
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