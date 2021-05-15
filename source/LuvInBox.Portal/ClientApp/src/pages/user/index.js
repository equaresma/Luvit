import React from 'react';
import CustomerDetails from '../../components/stepCustomer/customerDetails';
import CustomerContact from '../../components/stepCustomer/customerContact';
import CustomerAddress from '../../components/stepCustomer/customerAddress';
import { useTranslation } from 'react-i18next';

export const CustomerForm = () => {
    const { t } = useTranslation();
    const [step, setSetp] = React.useState(1);
    const items = [
        { label: t('general_info') },
        { label: t('address') },
        { label: 'Login' },
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
                    <CustomerDetails
                        currentStep={step - 1}
                        nextStep={nextStep}
                        stepItems={items}
                    />)
            case 2:
                return (
                    <CustomerAddress
                        currentStep={step - 1}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        stepItems={items}
                    />)
            case 3:
                return (
                    <CustomerContact
                        currentStep={step - 1}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        stepItems={items}
                    />)
        }
    }
    return (getActiveComponent());
};