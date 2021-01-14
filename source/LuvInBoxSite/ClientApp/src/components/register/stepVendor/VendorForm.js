import React, { Component } from 'react'
import Details from './Details';
import Contact from './Contact';

export class VendorForm extends Component {
    state = {
        step: 1,
        name: '',
        contact: ''
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }


    render() {
        const { step } = this.state;
        const { name } = this.state;
        const values = { name };

        switch (step) {
            case 1:
                return (
                    <Details
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={ values}
                    />
                )
            case 2:
                return (
                    <Contact
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return <h1>Passo 3</h1>
            case 4:
                return <h1>Passo 4</h1>
        }
    }
}

export default VendorForm