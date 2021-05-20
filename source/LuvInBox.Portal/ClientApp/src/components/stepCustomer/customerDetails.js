import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import { classNames } from 'primereact/components/utils/ClassNames';
import { Trans, useTranslation } from 'react-i18next';
import { Form } from 'reactstrap';
import { customerActions } from '../../../src/_actions/customer.actions';

const CustomerDetails = (props) => {
    const dispatch = useDispatch();
    const { nextStep, stepItems, currentStep } = props;
    const { t } = useTranslation();
    const [customer, setCustomer] = useState(props.customer);
    const [submitted, setSubmitted] = useState(false);

    const next = e => {
        e.preventDefault();
        setSubmitted(true);

        if (isValid()) {
            dispatch(customerActions.incrementCustomer(customer));
            nextStep();
        }
    }

    const handleChange = input => e => {
        const { target } = e;
        setCustomer({
            ...customer,
            [target.name]: target.type === "checkbox" ? target.checked : target.value
        });
    }

    const isValid = () => {
        return customer.FirstName && customer.FamilyName && customer.Email && customer.Birthday;
    }

    return (
        <div>
            <div className="divSteps">
                <Steps model={stepItems} activeIndex={currentStep} readOnly={true} />
            </div>
            <div className="card">
                <Form onSubmit={next}>
                    <div className="p-fluid">
                        <h4><Trans>general_info</Trans></h4>
                        <br />
                        <div className="p-fluid p-formgrid p-grid">
                            <div className="p-field p-col-4">
                                <InputText id="firstName" name="FirstName" type="text" onChange={handleChange()} defaultValue={customer.FirstName} autoFocus
                                    placeholder={t('lbl_name')} required className={classNames('p-d-block', { 'p-invalid': submitted && !customer.FirstName })} maxLength={60}/>
                            </div>
                            <div className="p-field p-col-4">
                                <InputText id="middleName" name="MiddleName" type="text" onChange={handleChange()} defaultValue={customer.MiddleName}
                                    placeholder={t('lbl_middle_name')} maxLength={120}/>
                            </div>
                            <div className="p-field p-col-4">
                                <InputText id="familyName" name="FamilyName" type="text" onChange={handleChange()} defaultValue={customer.FamilyName}
                                    placeholder={t('lbl_family_name')} required className={classNames('p-d-block', { 'p-invalid': submitted && !customer.FamilyName })} maxLength={255}/>
                            </div>
                            <div className="p-field p-col-12">
                                <InputText id="email" name="Email" type="text" onChange={handleChange()} defaultValue={customer.Email} placeholder="E-mail" maxLength="150" required
                                    aria-describedby="email-help" />
                                <small id="email-help" className="p-invalid p-d-block text-right"><Trans>email_fmt</Trans></small>
                            </div>
                            <div className="p-field p-col-6">
                                <InputMask id="phone" name="Phone" mask="+99(99) 9999-9999" onChange={handleChange()} value={customer.Phone}
                                    placeholder={t('phone')} />
                                <small id="mainPhone-help" className="p-d-block text-right"><Trans>phone_fmt</Trans></small>
                            </div>
                            <div className="p-field p-col-6">
                                <InputMask id="mobile" name="Mobile" mask="+99(99) 99999-9999" onChange={handleChange()} value={customer.Mobile}
                                    placeholder={t('mobile')} />
                                <small id="mobile-help" className="p-d-block text-right"><Trans>mobile_fmt</Trans></small>
                            </div>
                        </div>
                        <div className="p-fluid">
                            <InputMask id="birthday" name="Birthday" value={customer.Birthday} mask="99/99/9999" slotChar="mm/dd/yyyy"
                                onChange={handleChange()} aria-describedby="birthday-help" required placeholder={t('lbl_birthday')}
                                required className={classNames('p-d-block', { 'p-invalid': submitted && !customer.Birthday })}></InputMask>

                            <small id="birthday-help" className="p-d-block text-right"><Trans>lbl_birthday_required</Trans></small>
                        </div>
                    </div>
                    <br />
                    <Button
                        label={t("btn_next")}
                        type="submit"
                    />
                </Form>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return { customer: state.reducers.customer.customer };
}

export default connect(mapStateToProps)(CustomerDetails);