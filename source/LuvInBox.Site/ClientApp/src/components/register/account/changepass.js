import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../../store/Vendor';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Trans, useTranslation } from 'react-i18next';

export const ChangePass = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [pwd, setPwd] = React.useState({
        password: '',
        password2: ''
    });

    const handleChange = input => e => {
        const { target } = e;
        setUser({
            ...pwd,
            [target.name]: target.value
        });
    }

    const confirm = () => {
        if (user.userName && user.password) {
            dispatch(actionCreators.changePass(user));
        }
    }

    return (
        <div>
            <Form onSubmit={confirm}>
                <div className="card">
                    <FormGroup id="grpLogin" name="grpLogin">
                        <h4><Trans>Login</Trans></h4>
                        <div className="p-field">
                            <div className="p-inputgroup">
                                <InputText id="txtPwd" name="txtPwd" type="text" placeholder="Senha" defaultValue={password} onChange={handleChange} required
                                    hidden={hidden2} />
                                <Password id="pwd" name="pwd" placeholder="Senha" defaultValue={password} onChange={handleChange} required
                                    hidden={!hidden2} inline="true" />
                                <Button type="button" icon="pi pi-eye" className="p-button-sm p-button-text p-button-plain" onClick={toggleShow2} aria-describedby="pwd-help"/>
                                <small id="pwd-help" className="p-d-block text-right"><Trans>lbl_pwd_required</Trans></small>
                            </div>
                        </div>
                        <div className="p-field">
                            <div className="p-inputgroup">
                                <InputText id="txtPassword" name="txtPassword" type="text" placeholder={t('lbl_pwd_confirm')} defaultValue={password2}
                                    onChange={handleChange} required hidden={hidden} className={password == password2 ? 'p-valid' : 'p-invalid'} />
                                <Password id="password" name="Password" placeholder={t('lbl_pwd_confirm')} defaultValue={password2}
                                    onChange={handleChange} required hidden={!hidden} className={password == password2 ? 'p-valid' : 'p-invalid'} aria-describedby="pwd2-help"/>
                                <Button type="button" icon="pi pi-eye" className="p-button-sm p-button-text p-button-plain" onClick={toggleShow} />
                                <small id="pwd2-help" className="p-d-block text-right"><Trans>lbl_pwd_required</Trans></small>
                            </div>
                        </div>
                    </FormGroup>
                </div>
            </Form>
        </div>
    );
};