import React, { Component } from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../../../store/Vendor';
import { Details } from './Details';
import { Contact } from './Contact';
import { Address } from './Address';
import { SetupStore } from './SetupStore';
import { useTranslation } from 'react-i18next';
import Moment from 'moment';

export const VendorForm = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [step, setSetp] = React.useState(1);
    const [vendor, setVendor] = React.useState({
        Name: '',
        FantasyName: '',
        FoundedIn: null,
        LogoURL: '',
        WebSite: '',
        Email: '',
        DocumentNumber: { "Type": 5, Number: '', Name: '' },
        MainAddress: { Local: '', Number: 0, Complement: '', City: '', State: '', ZipCode: '' },
        MainPhone: '',
        Mobile: '',
        HasPhysicalStore: false,
        Contact: {
            LastName: '', MiddleName: '', FirstName: '', Birthday: null, Email: '', Phone: '', Mobile: '',
            Login: { UserName: '', Password: '' }
        },
        BankInfo: { BankCode: '', BankBranch: '', AccoundNumber: '' }
    });

    const items = [
        { label: t('general_info') },
        { label: t('address') },
        { label: t('setup_store') },
        { label: t('comercial_contact') },
        { label: t('confirmation') }];

    const save = () => {
        dispatch(actionCreators.saveVendor(vendor));
    }

    const nextStep = () => {
        setSetp(step + 1);
    }

    const prevStep = () => {
        setSetp(step - 1);
    }

    const handleChange = input => e => {
        const { target } = e;
        if (input === "MainAddress") {
            const add = {
                ...vendor.MainAddress,
                [target.name]: target.value
            }

            setVendor({
                ...vendor,
                MainAddress: add
            });

        } else if (input === "DocumentNumber") {
            const doc = {
                ...vendor.DocumentNumber,
                [target.name]: target.value
            }

            setVendor({
                ...vendor,
                DocumentNumber: doc
            });

        } else if (input === "Contact") {
            const cont = {
                ...vendor.Contact,
                [target.name]: target.value
            }

            setVendor({
                ...vendor,
                Contact: cont
            });

        } else if (input === "Login") {
            const cont = {
                ...vendor.Contact,
                [target.name]: target.value
            }

            const log = {
                ...vendor.Contact.Login,
                [target.name]: target.value
            }

            cont.Login = log;

            setVendor({
                ...vendor,
                Contact: cont
            });

        } else if (input === "BankInfo") {
            const bk = {
                ...vendor.BankInfo,
                [target.name]: target.value
            }

            setVendor({
                ...vendor,
                BankInfo: bk
            });

        } else if (input === "FoundedIn") {
            const moment = require('moment');
            setVendor({
                ...vendor,
                [input]: moment(target.value).format('YYYY-MM-DD')
            });

        } else {
            setVendor({
                ...vendor,
                [input]: target.type === "checkbox" ? target.checked : target.value
            });
        }
    }

    const getActiveComponent = () => {
        switch (step) {
            case 1:
                return (
                    <Details
                        currentStep={step - 1}
                        nextStep={nextStep}
                        handleChange={handleChange}
                        vendor={vendor}
                        stepItems={items}
                    />)
            case 2:
                return (
                    <Address
                        currentStep={step - 1}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        vendor={vendor}
                        stepItems={items}
                    />)
            case 3:
                return (
                    <SetupStore
                        currentStep={step - 1}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        vendor={vendor}
                        stepItems={items}
                    />)
            case 4:
                return (
                    <Contact
                        currentStep={step - 1}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        vendor={vendor}
                        stepItems={items}
                        save={save}
                    />)
        }
    }

    return (getActiveComponent());
};
/*
const items = [
    { label: 'general_info' },
    { label: 'address' },
    { label: 'setup_store' },
    { label: 'comercial_contact' },
    { label: 'confirmation' }
];

export class VendorForm extends Component {
    constructor() {
        super();
        this.state = {
            step: 1,
            stepItems: items,
            name: '',
            fantasyName: '',
            foundedIn: null,
            logoURL: '',
            webSite: '',
            email: '',
            documentNumber: { "type": 5, number: '', name: '' },
            mainAddress: { local: '', number: 0, complement: '', city: '', state: '', zipCode: '' },
            mainPhone: '',
            mobile: '',
            hasPhysicalStore: false,
            contact: {
                lastName: '', middleName: '', firstName: '', birthday: null, email: '', phone: '', mobile: '',
                login: { userName: '', password: '' }
            },
            bankInfo: { bankCode: '', bankBranch: '', accoundNumber: '' }
        };

        this.save = this.save.bind(this);
    }

    //componentDidMount() {
    //    this.fetchData();
    //}

    //componentDidUpdate() {
    //    // This method is called when the route parameters change
    //    if (this.props.forceReload) {
    //        this.fetchData();
    //    }
    //}

    save = () => {
        this.props.saveVendor(this.state.vendor);
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
        const { target } = e;
        if (input === "mainAddress") {
            this.setState(prev => ({
                mainAddress: {
                    ...prev.mainAddress,
                    [target.name]: target.value
                }
            }));
        } else if (input === "documentNumber") {
            this.setState(prev => ({
                documentNumber: {
                    ...prev.documentNumber,
                    [target.name]: target.value
                }
            }));
        } else if (input === "contact") {
            this.setState(prev => ({
                contact: {
                    ...prev.contact,
                    [target.name]: target.value
                }
            }));
        } else if (input === "login") {
            const { contact } = this.state;
            const login = {
                ...contact.login,
                [target.name]: target.value
            }

            this.setState(prev => ({
                contact: {
                    ...prev.contact,
                    ["login"]: login
                }
            }));
        } else {
            this.setState({ [input]: target.type === "checkbox" ? target.checked : target.value });
        }
    }

    render() {
        const { step } = this.state;
        const { name, fantasyName, foundedIn, logoURL, webSite, documentNumber, mainAddress, mainPhone, mobile, hasPhysicalStore, contact, bankInfo } = this.state;
        const vendor = { name, fantasyName, foundedIn, logoURL, webSite, documentNumber, mainAddress, mainPhone, mobile, hasPhysicalStore, contact, bankInfo };
        const { t } = this.props;;

        //translate values
        for (var i = 0; i < items.length; i++) {
            items[i].label = t(items[i].label);
        }

        switch (step) {
            case 4:
                return (
                    <Details
                        currentStep={step - 1}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        vendor={vendor}
                        stepItems={items}
                    />)
            case 2:
                return (
                    <Address
                        currentStep={step - 1}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        vendor={vendor}
                        stepItems={items}
                    />)
            case 3:
                return (
                    <SetupStore
                        currentStep={step - 1}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        vendor={vendor}
                        stepItems={items}
                    />)
            case 1:
                return (
                    <Contact
                        currentStep={step - 1}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        vendor={vendor}
                        stepItems={items}
                        save={this.save}
                    />)
        }
    }
}

//const Extended = withTranslation()(VendorForm);
//Extended.static = VendorForm.static;

//export default connect(dispatch => bindActionCreators(actionCreators, dispatch))(VendorForm)




//export const ExtendedComponent = withTranslation();
//export const translate = withTranslation;


//export default () => {
//    return { connect(dispatch => bindActinCreators(actionCreators, dispatch)), withTranslation()}
//}(VendorForm)

//const ConnectedVendor = connect(dispatch => bindActionCreators(actionCreators, dispatch))(VendorForm)
//const Translate = withTranslation()(VendorForm);

//export default (VendorForm) => {
//    return { ConnectedVendor, Translate}
//}

function mapStateToProps(state) {
    return {
        vendors: state.vendors.vendors,
        loading: state.vendors.loading,
        errors: state.vendors.errors,
        forceReload: state.vendors.forceReload
    }
}

export default withTranslation()(VendorForm)

export const a = connect(mapStateToProps, dispatch => bindActionCreators(actionCreators, dispatch))(VendorForm);
*/