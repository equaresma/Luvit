import React, { Component } from 'react'
import Details from './Details';
import Contact from './Contact';
import Address from './Address';
import SetupStore from './SetupStore';
import Confirmation from './Confirmation';
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();

const items = [
    { label: t('general_info') },
    { label: t('address') },
    { label: t('setup_store') },
    { label: t('comercial_contact') },
    { label: t('confirmation') }
];

export class VendorForm extends Component {
    state = {
        step: 1,
        stepItems: items,
        name: '',
        fantasyName: '',
        foundedIn: null,
        logoURL: '',
        webSite: '',
        contact: '',
        documentNumber: { type: 5, number: '', name: '' },
        mainAddress: { local: '', number: 0, complement: '', city: '', state: '', zipCode: '' },
        alternativeAddress: { local: '', number: 0, complement: '', city: '', state: '', zipCode: '' }
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e => {
        const { target } = e;
        if (input === "mainAddress") {
            this.setState(prev => ({
                mainAddress: {
                    ...prev.mainAddress,
                    [target.name]: target.value
                }
            }));
        } else if (input === "alternativeAddress") {
            this.setState(prev => ({
                alternativeAddress: {
                    ...prev.alternativeAddress,
                    [target.name]: target.value
                }
            }));
        } else if (input === "documentNumber") {
            this.setState(prev => ({
                documentNumber: {
                    ...prev.documentNumber,
                    [target.name]: target.value
                }
            }));
        } else {
            this.setState({ [input]: target.value });
        }
    }

    render() {
        const { step } = this.state;
        const { name, contact, mainAddress } = this.state;
        const values = { name, contact, mainAddress };

        switch (step) {
            case 1:
                return (
                    <Details
                        currentStep={step - 1}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        stepItems={items}
                    />)
            case 2:
                return (
                    <Address
                        currentStep={step - 1}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        stepItems={items}
                    />)
            case 3:
                return (
                    <SetupStore
                        currentStep={step - 1}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        stepItems={items}
                    />)
            case 4:
                return (
                    <Contact
                        currentStep={step - 1}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        stepItems={items}
                    />)
            case 5:
                return (
                    <Confirmation
                        currentStep={step - 1}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        stepItems={items}
                    />)
        }
    }
}

export default VendorForm