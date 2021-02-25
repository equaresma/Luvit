import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import { Trans, useTranslation } from 'react-i18next';
//import { Calendar } from 'primereact/calendar';
import { Form } from 'reactstrap';
import { customerActionCreators } from '../../../store/customer';

const CustomerDetails = (props) => {
    const dispatch = useDispatch();
    const { nextStep, handleChange, stepItems, currentStep, customer } = props;
    const { t } = useTranslation();

    const next = e => {
        e.preventDefault();
        dispatch(customerActionCreators.incrementCustomer(customer));
        nextStep();
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
                                <InputText id="firstName" name="FirstName" type="text" onChange={(e) => props.customer.FirstName = e.target.value} value={props.customer.FirstName}
                                    placeholder={t('lbl_name')} />
                            </div>
                            <div className="p-field p-col-4">
                                <InputText id="middleName" name="MiddleName" type="text" onChange={(e) => props.customer.MiddleName = e.target.value} value={props.customer.MiddleName}
                                    placeholder={t('lbl_middle_name')} />
                            </div>
                            <div className="p-field p-col-4">
                                <InputText id="familyName" name="FamilyName" type="text" onChange={(e) => props.customer.FamilyName = e.target.value} value={props.customer.FamilyName}
                                    placeholder={t('lbl_family_name')} />
                            </div>
                            <div className="p-field p-col-12">
                                <InputText id="email" name="Email" type="text" onChange={(e) => props.customer.Email = e.target.value} value={props.customer.Email} placeholder="E-mail"
                                    aria-describedby="email-help" />
                                <small id="email-help" className="p-invalid p-d-block text-right"><Trans>email_fmt</Trans></small>
                            </div>
                            <div className="p-field p-col-6">
                                <InputMask id="phone" name="Phone" mask="+99(99) 9999-9999" onValueChange={(e) => props.customer.Phone = e.target.value} value={props.customer.Phone}
                                    placeholder={t('phone')} />
                                <small id="mainPhone-help" className="p-d-block text-right"><Trans>phone_fmt</Trans></small>
                            </div>
                            <div className="p-field p-col-6">
                                <InputMask id="mobile" name="Mobile" mask="+99(99) 99999-9999" onValueChange={(e) => props.customer.Mobile = e.target.value} value={props.customer.Mobile}
                                    placeholder={t('mobile')} />
                                <small id="mobile-help" className="p-d-block text-right"><Trans>mobile_fmt</Trans></small>
                            </div>
                        </div>
                        <div className="p-fluid">
                            <InputMask id="foundedIn" name="Birthday" value={props.customer.Birthday} mask="99/99/9999" slotChar="mm/dd/yyyy"
                                onChange={(e) => props.customer.Birthday = e.target.value} aria-describedby="birthday-help" required placeholder={t('lbl_birthday')}></InputMask>
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
    const cu = state.Customer ? state.Customer : {};
    return { customer: cu };
}

export default connect(mapStateToProps)(CustomerDetails);