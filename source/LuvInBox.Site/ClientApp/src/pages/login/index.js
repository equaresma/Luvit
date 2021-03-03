import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Trans, useTranslation } from 'react-i18next';
import { userActions } from '../../_actions';

export const Login = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [id, setID] = useState('');
    const [pwd, setPWD] = useState('');

    const confirm = (e) => {
        e.preventDefault();

        if (id && pwd) {
            dispatch(userActions.login(id, pwd));
        }
    }

    return (
        <div>
            <Form onSubmit={confirm}>                
                <div className="card" style={{ marginTop: "25px" }}>
                    <h4>Login</h4>
                    <br/>
                    <FormGroup id="grpLogin" name="grpLogin" style={{ margin: "25px", padding: "2em"}}>
                        <div>
                            <div><label htmlFor="userName"><Trans>lbl_username</Trans></label></div>
                            <div>
                                <InputText id="userName" name="userName" type="text" value={id} onChange={e => setID(e.target.value)} required />
                            </div>
                            <div style={{marginTop: "25px"}}><label htmlFor="pwd"><Trans>lbl_pwd</Trans></label></div>
                            <div>
                                <Password id="password" name="password" type="text" value={pwd} onChange={e => setPWD(e.target.value)} required feedback={false} />
                            </div>
                            <Button
                                label={t("btn_enter")}
                                type="submit"
                                className="btn btn-primary"
                                style={{marginTop: "25px"}}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup id="grpNew" name="grpNew" style={{ marginTop: "25px" }}>
                        <h4><Trans>tit_is_new</Trans></h4>
                        <Link to="/register/customer"><Trans>tit_create_account</Trans></Link>
                    </FormGroup>
                </div>
            </Form>
        </div>
    );
};