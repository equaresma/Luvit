﻿import React, { Component } from 'react'
import Details from './Details';
import Contact from './Contact';
import Address from './Address';
import SetupStore from './SetupStore';
import Confirmation from './Confirmation';
import { withTranslation } from 'react-i18next';

const items = [
    { label: 'general_info' },
    { label: 'address' },
    { label: 'setup_store' },
    { label: 'comercial_contact' },
    { label: 'confirmation' }
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
        documentNumber: { "type": 5, number: '', name: '' },
        mainAddress: { local: '', number: 0, complement: '', city: '', state: '', zipCode: '' },
        mainPhone: { countryCode: 0, localeCode: 0, number: 0 },
        mobile: { countryCode: 0, localeCode: 0, number: 0 },
        hasPhysicalStore: false,
        contact: {
            lastName: '', middleName: '', firstName: '', birthday: null, email: '',
            phone: { countryCode: 0, localeCode: 0, number: 0 }, mobile: { countryCode: 0, localeCode: 0, number: 0 },
            login: { userName:'', password: ''}
        },
        bankInfo: { bankCode: '', bankBranch: '', accoundNumber: '' }
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
        } else if (input === "documentNumber") {
            this.setState(prev => ({
                documentNumber: {
                    ...prev.documentNumber,
                    [target.name]: target.value
                }
            }));
        } else if (input === "contact") {
            this.setState(prev => ({
                contact: {
                    ...prev.contact,
                    [target.name]: target.value
                }
            }));
        } else if (input === "login") {
            const { contact } = this.state;
            const login = {
                    ...contact.login,
                    [target.name]: target.value
            }

            this.setState(prev => ({
                contact: {
                    ...prev.contact,
                    ["login"]: login
                }
            }));
        } else if (input === "phone") {
            const { contact } = this.state;
            const phone = {
                ...contact.phone,
                [target.name]: target.value
            }

            this.setState(prev => ({
                contact: {
                    ...prev.contact,
                    ["phone"]: phone
                }
            }));
        }else {
            this.setState({ [input]: target.type === "checkbox" ? target.checked : target.value });
        }
    }

    render() {
        const { step } = this.state;
        const { name, fantasyName, foundedIn, logoURL, webSite, documentNumber, mainAddress, mainPhone, mobile, hasPhysicalStore, contact, bankInfo } = this.state;
        const values = { name, fantasyName, foundedIn, logoURL, webSite, documentNumber, mainAddress, mainPhone, mobile, hasPhysicalStore, contact, bankInfo };
        const { t } = this.props;
        //translate values
        for (var i = 0; i < items.length; i++) {
            items[i].label = t(items[i].label);
        }

        switch (step) {
            case 4:
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
            case 1:
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
export default withTranslation()(VendorForm)