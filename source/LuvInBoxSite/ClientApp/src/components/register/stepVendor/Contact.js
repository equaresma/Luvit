import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primeflex/primeflex.css';
import { Steps } from 'primereact/steps';

export class Contact extends Component {
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
                <div>
                    <Steps model={stepItems} activeIndex={currentStep} readOnly={true} />
                    <br />
                </div>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="contact">Contact Name</label>
                        <InputText id="contact" onChange={handleChange('contact')} defaultValue={values.contact} />
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
            </React.Fragment >
        )
    }
}

export default Contact