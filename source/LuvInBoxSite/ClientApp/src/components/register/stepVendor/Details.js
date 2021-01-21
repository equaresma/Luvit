import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import { Trans, useTranslation } from 'react-i18next';
import { Calendar } from 'primereact/calendar';
import { Form } from 'reactstrap';

export const Details = (props) => {
    const { nextStep, handleChange, stepItems, currentStep, vendor } = props;
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
                    <InputText id="name" name="Name" onChange={handleChange('Name')} defaultValue={vendor.Name} type="text" aria-describedby="username2-help"
                        className="p-d-block" required maxLength="120" placeholder={t('lbl_name')} />
                    <small id="username2-help" className="p-d-block text-right"><Trans>lbl_name_required</Trans></small>
                </div>
                <div className="p-fluid">
                    <InputText id="fantasyName" name="FantasyName" onChange={handleChange('FantasyName')} defaultValue={vendor.FantasyName} type="text"
                        aria-describedby="userfantasyName2-help" className="p-d-block" required maxLength="120" placeholder={t('lbl_fantasy_name')} />
                    <small id="userfantasyName2-help" className="p-d-block text-right"><Trans>lbl_fantasy_name_required</Trans></small>
                </div>
                <div className="p-fluid">
                    <InputText id="number" name="Number" onChange={handleChange('Document')} defaultValue={vendor.Document.Number} type="text"
                        aria-describedby="number-help" className="p-d-block" required maxLength="30" placeholder={t('lbl_document')} />
                    <small id="number-help" className="p-d-block text-right"><Trans>lbl_document_required</Trans></small>
                </div>
                <div className="p-fluid">
                    <InputMask id="mainPhone" name="MainPhone" type="text" mask="+99(99) 9999-9999" onChange={handleChange('MainPhone')} value={vendor.MainPhone}
                        aria-describedby="mainPhone-help" className="p-d-block" required maxLength="30" placeholder={t('phone')} />
                    <small id="mainPhone-help" className="p-d-block text-right"><Trans>phone_fmt</Trans></small>
                </div>
                <div className="p-fluid">
                    <Calendar id="foundedIn" name="FoundedIn" value={vendor.FoundedIn} onChange={handleChange('FoundedIn')} aria-describedby="foundedIn-help" required
                        placeholder={t('lbl_founded_in')} className="p-calendar"></Calendar>
                    <small id="foundedIn-help" className="p-d-block text-right"><Trans>lbl_founded_in_required</Trans></small>
                </div>

                <br />
                <Button
                    label={t("btn_next")}
                    type="submit"
                />
            </Form>
        </div>
    );
}