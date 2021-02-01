import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../../store/Vendor';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Trans, useTranslation } from 'react-i18next';

export const Login = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [user, setUser] = React.useState({
        userName: '',
        password: ''
    });

    const handleChange = input => e => {
        const { target } = e;
        setUser({
            ...user,
            [input]: target.value
        });
    }

    const confirm = () => {
        if (user.userName && user.password) {
            dispatch(actionCreators.doLogin(user));
        }
    }

    return (
        <div>
            <Form onSubmit={confirm}>
                <div className="p-fluid">
                    <FormGroup id="grpLogin" name="grpLogin">
                        <div className="card">
                            <div><label htmlFor="userName"><Trans>lbl_username</Trans></label></div>
                            <div>
                                <InputText id="userName" name="userName" type="text" onChange={(e) => { handleChange(e) }} value={user.userName} required />
                            </div>
                            <div><label htmlFor="pwd"><Trans>lbl_pwd</Trans></label></div>
                            <div>
                                <Password id="pwd" type="text" onChange={(e) => { handleChange(e) }} value={user.password} required />
                            </div>
                            <br />
                            <Button
                                label={t("btn_enter")}
                                type="submit"
                                className="btn btn-primary"
                            />
                        </div>
                    </FormGroup>
                    <FormGroup id="grpNew" name="grpNew">
                        <h4><Trans>tit_is_new</Trans></h4>
                        <Link to="/register/customer"><Trans>tit_create_account</Trans></Link>
                    </FormGroup>
                </div>
            </Form>
        </div>
    );
};