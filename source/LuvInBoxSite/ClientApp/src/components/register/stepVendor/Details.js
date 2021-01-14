import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primeflex/primeflex.css';

export class Details extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <React.Fragment>
                <div className="p-grid p-fluid">
                    <div className="p-field">
                        <label htmlFor="name">Name</label></div>
                    <InputText id="name" onChange={handleChange('name')} defaultValue={values.name} />
                </div>
                <br />
                <Button
                    label="Continue"
                    type="button"
                    icon="pi pi-check"
                    onClick={this.continue}
                />
            </React.Fragment >
        )
    }
}

export default Details