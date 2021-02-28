import React from 'react';
import { Details } from '../../components/stepVendor/details';
import { Contact } from '../../components/stepVendor/contact';
import { Address } from '../../components/stepVendor/address';
import { SetupStore } from '../../components/stepVendor/setupStore';
import { useTranslation } from 'react-i18next';

export const VendorForm = () => {
    const { t } = useTranslation();
    const [step, setSetp] = React.useState(1);
    const items = [
        { label: t('general_info') },
        { label: t('address') },
        { label: t('setup_store') },
        { label: t('comercial_contact') },
        { label: t('confirmation') }];
 
    const nextStep = () => {
        setSetp(step + 1);
    }

    const prevStep = () => {
        setSetp(step - 1);
    }

    const getActiveComponent = () => {
        switch (step) {
            case 1:
                return (
                    <Details
                        currentStep={step - 1}
                        nextStep={nextStep}
                        stepItems={items}
                    />)
            case 2:
                return (
                    <Address
                        currentStep={step - 1}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        stepItems={items}
                    />)
            case 3:
                return (
                    <SetupStore
                        currentStep={step - 1}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        stepItems={items}
                    />)
            case 4:
                return (
                    <Contact
                        currentStep={step - 1}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        stepItems={items}
                    />)
        }
    }

    return (getActiveComponent());
};