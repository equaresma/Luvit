import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Form, FormGroup } from 'reactstrap';
import { Button } from 'primereact/button';
import { Trans, useTranslation } from 'react-i18next';
import { userActions } from '../../_actions';

import './index.css';

export const AdmLogin = () => {
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
        <div className="card">
            <center><h1 className="title"><Trans>txt_restricted_access</Trans></h1></center>
            <Form onSubmit={confirm}>
                <div style={{ marginTop: "65px", marginBottom: "65px" }}>
                    <div className="row">
                        <div className="col-3">
                            
                        </div>
                        <div className="col-3">
                            <FormGroup id="grpLogin" name="grpLogin">
                                <div><label htmlFor="userName"><Trans>lbl_username</Trans></label></div>
                                <div>
                                    <InputText id="userName" name="userName" type="text" value={id} onChange={e => setID(e.target.value)} required />
                                </div>
                                <div style={{ marginTop: "25px" }}><label htmlFor="pwd"><Trans>lbl_pwd</Trans></label></div>
                                <div>
                                    <Password id="password" name="password" type="text" value={pwd} onChange={e => setPWD(e.target.value)} required feedback={false} />
                                </div>
                                <Button
                                    label={t("btn_enter")}
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ marginTop: "25px" }}
                                />
                            </FormGroup>
                        </div>                        
                    </div>
                </div >
            </Form></div>
    );
};