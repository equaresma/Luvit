import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import { Trans, useTranslation } from 'react-i18next';
import { Calendar } from 'primereact/calendar';
import { Form } from 'reactstrap';

export const CustomerDetails = (props) => {
    const { nextStep, handleChange, stepItems, currentStep, customer } = props;
    const { t } = useTranslation();

    const next = e => {
        e.preventDefault();
        nextStep();
    }

    return (
        <div>
            <div>
                <Steps model={stepItems} activeIndex={currentStep} readOnly={true} />
                <br />
                <br />
            </div>
            <h2><Trans>general_info</Trans></h2>
            <br />
            <br />
            <Form onSubmit={next}>
                <div className="p-fluid">
                    <h4><Trans>general_info</Trans></h4>
                    <div className="p-fluid p-formgrid p-grid">
                        <div className="p-field p-col-4">
                            <InputText id="firstName" name="FirstName" type="text" onChange={handleChange('FirstName')} defaultValue={customer.FirstName}
                                placeholder={t('lbl_name')} />
                        </div>
                        <div className="p-field p-col-4">
                            <InputText id="middleName" name="MiddleName" type="text" onChange={handleChange('MiddleName')} defaultValue={customer.MiddleName}
                                placeholder={t('lbl_middle_name')} />
                        </div>
                        <div className="p-field p-col-4">
                            <InputText id="familyName" name="FamilyName" type="text" onChange={handleChange('FamilyName')} defaultValue={customer.FamilyName}
                                placeholder={t('lbl_family_name')} />
                        </div>
                        <div className="p-field p-col-12">
                            <InputText id="email" name="Email" type="text" onChange={handleChange('Email')} defaultValue={customer.Email} placeholder="E-mail"
                                aria-describedby="email-help" />
                            <small id="email-help" className="p-invalid p-d-block text-right"><Trans>email_fmt</Trans></small>
                        </div>
                        <div className="p-field p-col-6">
                            <InputMask id="phone" name="Phone" mask="+99(99) 9999-9999" onValueChange={handleChange('Phone')} defaultValue={customer.Phone}
                                placeholder={t('phone')} />
                            <small id="mainPhone-help" className="p-d-block text-right"><Trans>phone_fmt</Trans></small>
                        </div>
                        <div className="p-field p-col-6">
                            <InputMask id="mobile" name="Mobile" mask="+99(99) 99999-9999" onValueChange={handleChange('Mobile')} defaultValue={customer.Mobile}
                                placeholder={t('mobile')} />
                            <small id="mobile-help" className="p-d-block text-right"><Trans>mobile_fmt</Trans></small>
                        </div>
                    </div>
                    <div className="p-fluid">
                        <Calendar id="foundedIn" name="Birthday" value={customer.Birthday} onChange={handleChange('Birthday')} aria-describedby="foundedIn-help" required
                            placeholder={t('lbl_birthday')} className="p-calendar"></Calendar>
                        <small id="foundedIn-help" className="p-d-block text-right"><Trans>lbl_birthday_required</Trans></small>
                    </div>
                </div>
                <Button
                    label={t("btn_next")}
                    type="submit"
                />
            </Form>
        </div>
    );
}