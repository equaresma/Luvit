import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
//import { Growl } from 'primereact/growl';
import { actionCreators } from '../../store/Vendor';

class VendorUI extends Component {

    constructor() {
        super();
        this.state = {};
        this.onVendorSelect = this.onVendorSelect.bind(this);
        this.dialogHide = this.dialogHide.bind(this);
        this.addNew = this.addNew.bind(this);
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate() {
        // This method is called when the route parameters change
        if (this.props.forceReload) {
            this.fetchData();
        }
    }

    fetchData() {
        this.props.requestVendors();
    }

    updateProperty(property, value) {
        let vendor = this.state.vendor;
        vendor[property] = value;
        this.setState({ vendor: vendor });
    }

    onVendorSelect(e) {
        this.newVendor = false;
        this.setState({
            displayDialog: true,
            vendor: Object.assign({}, e.data)
        });
    }

    dialogHide() {
        this.setState({ displayDialog: false });
    }

    addNew() {
        this.newVendor = true;
        this.setState({
            vendor: {
                Id: null,
                Name: '',
                FantasyName: '',
                FoundedIn: null,
                DocumentNumber: { "Type": 5, Number: '', Name: '' },
                LogoURL: '',
                WebSite: '',
                Email: '',
                MainAddress: { Local: '', Number: 0, Complement: '', City: '', State: '', ZipCode: '' },
                AlternativeAdress: null,
                MainPhone: '',
                Mobile: '',
                HasPhysicalStore: false,
                Contact: {
                    LastName: '', MiddleName: '', FirstName: '', Birthday: null, Email: '', Phone: '', Mobile: '',
                    login: { UserName: '', Password: '' }
                },
                BankInfo: { BankCode: '', BankBranch: '', AccountNumber: '' }
            },
            displayDialog: true
        });
    }

    save() {
        this.props.saveVendor(this.state.vendor);
        this.dialogHide();
        //this.growl.show({
        //    severity: 'success', detail: this.newVendor ?
        //        "Data Saved Successfully" : "Data Updated Successfully"
        //});
    }

    delete() {
        this.props.deleteVendor(this.state.vendor.vendorId);
        this.dialogHide();
        //this.growl.show({ severity: 'error', detail: "Data Deleted Successfully" });
    }

    render() {

        let header = <div className="p-clearfix"
            style={{ lineHeight: '1.87em' }}>CRUD for Vendors </div>;

        let footer = <div className="p-clearfix" style={{ width: '100%' }}>
            <Button style={{ float: 'left' }} label="Add"
                icon="pi pi-plus" onClick={this.addNew} />
        </div>;

        let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
            <Button label="Close" icon="pi pi-times" onClick={this.dialogHide} />
            <Button label="Delete" disabled={this.newVendor ? true : false}
                icon="pi pi-times" onClick={this.delete} />
            <Button label={this.newVendor ? "Save" : "Update"} icon="pi pi-check"
                onClick={this.save} />
        </div>;

        return (
            <div>                
                <DataTable value={this.props.vendors} selectionMode="single"
                    header={header} footer={footer}
                    selection={this.state.selectedVendor}
                    onSelectionChange={e => this.setState
                        ({ selectedVendor: e.value })} onRowSelect={this.onVendorSelect}>
                    <Column field="vendorId" header="ID" />
                    <Column field="Name" header="Name" />
                    <Column field="FantasyName" header="FantasyName" />
                    <Column field="Email" header="Email" />
                    <Column field="MainPhone" header="Phone" />
                </DataTable>
                <Dialog visible={this.state.displayDialog} style={{ 'width': '380px' }}
                    header="Vendor Details" modal={true} footer={dialogFooter}
                    onHide={() => this.setState({ displayDialog: false })}>
                    {
                        this.state.vendor &&

                        <div className="p-grid p-fluid">

                            <div><label htmlFor="name">Nome</label></div>
                            <div>
                                <InputText id="name" onChange={(e) => { this.updateProperty('Name', e.target.value) }}
                                    value={this.state.vendor.Name} />
                            </div>

                            <div style={{ paddingTop: '10px' }}>
                                <label htmlFor="lastName">Fantasy name</label></div>
                            <div>
                                <InputText id="lastName" onChange={(e) => { this.updateProperty('FantasyName', e.target.value) }}
                                    value={this.state.vendor.FantasyName} />
                            </div>

                            <div style={{ paddingTop: '10px' }}>
                                <label htmlFor="lastName">Email</label></div>
                            <div>
                                <InputText id="email" onChange={(e) => { this.updateProperty('Email', e.target.value) }}
                                    value={this.state.vendor.Email} />
                            </div>
                        </div>
                    }
                </Dialog>
            </div>
        )
    }
}

// Make vendors array available in  props
function mapStateToProps(state) {
    return {
        vendors: state.vendors.vendors,
        loading: state.vendors.loading,
        errors: state.vendors.errors,
        forceReload: state.vendors.forceReload
    }
}

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(VendorUI);