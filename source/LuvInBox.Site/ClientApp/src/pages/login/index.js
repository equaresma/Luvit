import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../store/login';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Trans, useTranslation } from 'react-i18next';
import { useHistory } from "react-router-dom";

export const Login = () => {
    const history = useHistory();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [user, setUser] = React.useState({
        email: '',
        password: ''
    });

    const handleChange = input => e => {
        const { target } = e;
        setUser({
            ...user,
            [target.name]: target.value
        });
    }

    const confirm = () => {
        if (user.userName && user.password) {
            dispatch(actionCreators.doLogin(user)).then(x => {
                history.push("/");
            });
        }
    }

    return (
        <div>
            <Form onSubmit={confirm}>
                <div className="card">
                    <FormGroup id="grpLogin" name="grpLogin">
                        <div>
                            <div><label htmlFor="userName"><Trans>lbl_username</Trans></label></div>
                            <div>
                                <InputText id="userName" name="userName" type="text" onChange={handleChange()} value={user.email} required />
                            </div>
                            <div><label htmlFor="pwd"><Trans>lbl_pwd</Trans></label></div>
                            <div>
                                <Password id="password" name="password" type="text" onChange={handleChange()} value={user.password} required feedback={false} />
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