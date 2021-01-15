import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primeflex/primeflex.css';
import { Steps } from 'primereact/steps';

export class Address extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange, stepItems, currentStep } = this.props;

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <div>
                            <Steps model={stepItems} activeIndex={currentStep} readOnly={true} />
                            <br />
                        </div>
                        <h1>Address</h1>
                        <br />
                        <div className="p-fluid p-formgrid p-grid">
                            <div className="p-field p-col-12">
                                <InputText id="zipcode" name="zipCode" onChange={handleChange('mainAddress')} value={values.address.zipcode} />
                                <label htmlFor="zipcode">Name</label>
                                <small id="username2-help" className="p-invalid p-d-block">Username is obligatory.</small>
                            </div>
                        </div>
                        <br />
                        <div className="p-formgroup-inline">
                            <Button
                                label="Continue"
                                type="button"
                                onClick={this.continue}
                            />
                            <Button
                                style={{ marginLeft: "10px" }}
                                label="Back"
                                type="button"
                                onClick={this.back}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default Address