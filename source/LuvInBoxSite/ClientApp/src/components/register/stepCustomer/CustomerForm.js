import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../../store/Customer';
import { CustomerDetails } from './CustomerDetails';
import { CustomerContact } from './CustomerContact';
import { CustomerAddress } from './CustomerAddress';
import { useTranslation } from 'react-i18next';

export const CustomerForm = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [step, setSetp] = React.useState(1);
    const [customer, setCustomer] = React.useState({
        FamilyName: '',
        MiddleName: '',
        FirstName: '',
        Birthday: null,
        Email: '',
        Phone: '',
        Mobile: '',
        Document: { "Type": 5, Number: '', Name: '' },
        MaritalStatus: 0,
        Degree: 0,
        Gender: 0,
        Address: { Local: '', Number: 0, Complement: '', City: '', State: '', ZipCode: '', Country: 'Brasil' },
        Login: {UserName: '', Password: ''}
    });

    const items = [
        { label: t('general_info') },
        { label: t('address') },
        { label: 'Login' },
        { label: t('confirmation')}];

    const save = () => {
        dispatch(actionCreators.saveCustomer(customer));
    }

    const nextStep = () => {
        setSetp(step + 1);
    }

    const prevStep = () => {
        setSetp(step - 1);
    }

    const upDateAddress = newAddress => {
        customer.MainAddress = newAddress;
        setCustomer(customer);
    }

    const handleChange = input => e => {
        const { target } = e;
        if (input === "Document") {
            const doc = {
                ...customer.Document,
                [target.name]: target.value
            }

            setCustomer({
                ...customer,
                Document: doc
            });

        } else if (input === "Login") {
            const log = {
                ...customer.Login,
                [target.name]: target.value
            }

            setCustomer({
                ...customer,
                Login: log
            });

        } else if (input === "Birthday") {
            const moment = require('moment');
            setCustomer({
                ...customer,
                [input]: moment(target.value).format('YYYY-MM-DD')
            });

        } else {
            setCustomer({
                ...customer,
                [input]: target.type === "checkbox" ? target.checked : target.value
            });
        }
    }

    const getActiveComponent = () => {
        switch (step) {
            case 1:
                return (
                    <CustomerDetails
                        currentStep={step - 1}
                        nextStep={nextStep}
                        handleChange={handleChange}
                        customer={customer}
                        stepItems={items}
                    />)
            case 2:
                return (
                    <CustomerAddress
                        currentStep={step - 1}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        customer={customer}
                        stepItems={items}
                        upDateAddress={upDateAddress }
                    />)
            case 3:
                return (
                    <CustomerContact
                        currentStep={step - 1}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        customer={customer}
                        stepItems={items}
                        save={save}
                    />)
        }
    }

    return (getActiveComponent());
};