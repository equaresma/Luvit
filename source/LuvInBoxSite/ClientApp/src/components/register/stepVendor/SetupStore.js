import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primeflex/primeflex.css';
import { Steps } from 'primereact/steps';
import { Trans } from 'react-i18next';

export class SetupStore extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
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
                        <h2><Trans>general_info</Trans></h2>
                        <br />
                        <div className="p-fluid">
                            <span className="p-float-label">
                                <InputText id="name" onChange={handleChange('name')} defaultValue={values.name} type="text" aria-describedby="username2-help" className="p-invalid p-d-block" />
                                <label htmlFor="name">Name</label>
                                <small id="username2-help" className="p-invalid p-d-block">Username is obligatory.</small>
                            </span>
                        </div>
                        <br />
                        <Button
                            label="Continue"
                            type="button"
                            onClick={this.continue}
                        />
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default SetupStore