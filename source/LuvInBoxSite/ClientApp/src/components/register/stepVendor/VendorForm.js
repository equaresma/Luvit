import React, { Component } from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../../../store/Vendor';
import { Details } from './Details';
import { Contact } from './Contact';
import { Address } from './Address';
import { SetupStore } from './SetupStore';
import { useTranslation } from 'react-i18next';

export const VendorForm = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [step, setSetp] = React.useState(1);
    const [vendor, setVendor] = React.useState({
        Name: '',
        FantasyName: '',
        FoundedIn: null,
        LogoURL: '',
        WebSite: '',
        Email: '',
        Document: { "Type": 5, Number: '', Name: '' },
        MainAddress: { Local: '', Number: 0, Complement: '', City: '', State: '', ZipCode: '' },
        MainPhone: '',
        Mobile: '',
        HasPhysicalStore: false,
        Contact: {
            FamilyName: '', MiddleName: '', FirstName: '', Birthday: null, Email: '', Phone: '', Mobile: '',
            Login: { UserName: '', Password: '' }
        },
        BankInfo: { BankCode: '', BankBranch: '', AccountNumber: '' }
    });

    const items = [
        { label: t('general_info') },
        { label: t('address') },
        { label: t('setup_store') },
        { label: t('comercial_contact') },
        { label: t('confirmation') }];

    const save = () => {
        dispatch(actionCreators.saveVendor(vendor));
    }

    const nextStep = () => {
        setSetp(step + 1);
    }

    const prevStep = () => {
        setSetp(step - 1);
    }

    const upDateAddress = newAddress => {
        vendor.MainAddress = newAddress;
        setVendor(vendor);
    }

    const handleChange = input => e => {
        const { target } = e;
        if (input === "MainAddress") {
            const add = {
                ...vendor.MainAddress,
                [target.name]: target.value
            }

            setVendor({
                ...vendor,
                MainAddress: add
            });

        } else if (input === "Document") {
            const doc = {
                ...vendor.Document,
                [target.name]: target.value
            }

            setVendor({
                ...vendor,
                Document: doc
            });

        } else if (input === "Contact") {
            const cont = {
                ...vendor.Contact,
                [target.name]: target.value
            }

            setVendor({
                ...vendor,
                Contact: cont
            });

        } else if (input === "Login") {
            const cont = {
                ...vendor.Contact,
                [target.name]: target.value
            }

            const log = {
                ...vendor.Contact.Login,
                [target.name]: target.value
            }

            cont.Login = log;

            setVendor({
                ...vendor,
                Contact: cont
            });

        } else if (input === "BankInfo") {
            const bk = {
                ...vendor.BankInfo,
                [target.name]: target.value
            }

            setVendor({
                ...vendor,
                BankInfo: bk
            });

        } else if (input === "FoundedIn") {
            const moment = require('moment');
            setVendor({
                ...vendor,
                [input]: moment(target.value).format('YYYY-MM-DD')
            });

        } else {
            setVendor({
                ...vendor,
                [input]: target.type === "checkbox" ? target.checked : target.value
            });
        }
    }

    const getActiveComponent = () => {
        switch (step) {
            case 1:
                return (
                    <Details
                        currentStep={step - 1}
                        nextStep={nextStep}
                        handleChange={handleChange}
                        vendor={vendor}
                        stepItems={items}
                    />)
            case 2:
                return (
                    <Address
                        currentStep={step - 1}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        vendor={vendor}
                        stepItems={items}
                        upDateAddress={upDateAddress }
                    />)
            case 3:
                return (
                    <SetupStore
                        currentStep={step - 1}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        vendor={vendor}
                        stepItems={items}
                    />)
            case 4:
                return (
                    <Contact
                        currentStep={step - 1}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        vendor={vendor}
                        stepItems={items}
                        save={save}
                    />)
        }
    }

    return (getActiveComponent());
};