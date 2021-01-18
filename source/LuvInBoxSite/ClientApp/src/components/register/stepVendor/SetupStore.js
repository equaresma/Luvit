import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import { Form, FormGroup } from 'reactstrap';
import { FileUpload } from 'primereact/fileupload';
import { Trans, withTranslation } from 'react-i18next';

import 'primeflex/primeflex.css';

export class SetupStore extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    onUpload = () => {
        alert('Arquivo coisado');
    }

    render() {
        const { values, handleChange, stepItems, currentStep } = this.props;
        const { t } = this.props;

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <div>
                            <Steps model={stepItems} activeIndex={currentStep} readOnly={true} />
                            <br />
                            <br />
                        </div>
                        <h2><Trans>general_info</Trans></h2>
                        <br />
                        <br />
                        <Form onSubmit={this.continue}>
                            <div className="p-fluid">
                                <div className="p-field p-col-12">
                                    <FileUpload name="demo[]" url="./upload.php" onUpload={this.onUpload} multiple accept="image/*" maxFileSize={30000}
                                        emptyTemplate={<p className="p-m-0">Drag and drop files to here to upload.</p>} />
                                </div>
                                <div className="p-field p-col-12">
                                    <InputText id="webSite" name="webSite" onChange={handleChange('webSite')} value={values.webSite} required maxLength="1000" placeholder="Website" className="p-d-block" type="text" aria-describedby="webSite-help" />
                                    <small id="webSite-help" className="p-invalid p-d-block text-right"><Trans>lbl_web_site</Trans></small>
                                </div>
                                <FormGroup>
                                    <h4><Trans>tit_bank</Trans></h4>
                                    <div className="p-fluid p-formgrid p-grid">
                                        <div className="p-field p-col-3">
                                            <InputText id="bankCode" name="bankCode" onChange={handleChange('bankInfo')} value={values.bankCode} required maxLength="1000" placeholder="Website" className="p-d-block" type="text" aria-describedby="bankCode-help" />
                                            <small id="bankCode-help" className="p-invalid p-d-block text-right"><Trans>lbl_web_site</Trans></small>
                                        </div>
                                        <div className="p-field p-col-3">
                                            <InputText id="bankBranch" name="bankBranch" onChange={handleChange('bankInfo')} value={values.bankBranch} required maxLength="1000" placeholder="Website" className="p-d-block" type="text" aria-describedby="bankBranch-help" />
                                            <small id="bankBranch-help" className="p-invalid p-d-block text-right"><Trans>lbl_web_site</Trans></small>
                                        </div>
                                        <div className="p-field p-col-3">
                                            <InputText id="accoundNumber" name="accoundNumber" onChange={handleChange('bankInfo')} value={values.accoundNumber} required maxLength="1000" placeholder="Website" className="p-d-block" type="text" aria-describedby="accoundNumber-help" />
                                            <small id="accoundNumber-help" className="p-invalid p-d-block text-right"><Trans>lbl_web_site</Trans></small>
                                        </div>
                                    </div>
                                </FormGroup>
                            </div>
                            <br />
                            <Button
                                label={t("btn_next")}
                                type="submit"
                            />
                            <Button
                                style={{ marginLeft: "10px" }}
                                label={t("btn_prev")}
                                type="button"
                                onClick={this.back}
                            />
                        </Form>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default withTranslation()(SetupStore)