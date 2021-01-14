import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primeflex/primeflex.css';

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
        const { values, handleChange } = this.props;

        return (
            <React.Fragment>
                <div className="p-grid p-fluid">
                    <div className="p-field">
                        <label htmlFor="contact">Name</label></div>
                    <InputText id="contact" onChange={handleChange('contact')} defaultValue={values.contact} />
                </div>
                <br />
                <Button
                    label="Continue"
                    type="button"
                    onClick={this.continue}
                />
                <Button
                    label="Back"
                    type="button"
                    onClick={this.back}
                />
            </React.Fragment >
        )
    }
}

export default Contact