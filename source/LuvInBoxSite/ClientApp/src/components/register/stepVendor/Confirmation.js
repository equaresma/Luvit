import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primeflex/primeflex.css';
import { Steps } from 'primereact/steps';

export class Confirmation extends Component {
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
                        <label htmlFor="name">Name</label>
                        <InputText id="name" defaultValue={values.name} readOnly />
                    </div>
                    <div className="p-field">
                        <label htmlFor="contact">Contact Name</label>
                        <InputText id="contact" defaultValue={values.contact} readOnly />
                    </div>
                    <div className="p-field">
                        <label htmlFor="address">Address</label>
                        <InputText id="address" defaultValue={(values.address.local + ',' + values.address.number
                            + ',' + values.address.complement)} readOnly />
                    </div>
                </div>
                <br />
                <div className="p-formgroup-inline">
                    <Button
                        label="Confirm"
                        type="button"
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

export default Confirmation