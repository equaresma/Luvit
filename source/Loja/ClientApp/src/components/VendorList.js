import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Growl } from 'primereact/growl';
import { actionCreators } from '../store/Vendor';

class VendorList extends Component {

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
            vendor: { id: null, name: '', logoUrl: '', website: '', email: '' },
            displayDialog: true
        });
    }

    save() {
        this.props.saveVendor(this.state.vendor);
        this.dialogHide();
        this.growl.show({
            severity: 'success', detail: this.newVendor ?
                "Data Saved Successfully" : "Data Updated Successfully"
        });
    }

    delete() {
        this.props.deleteVendor(this.state.vendor.vendorId);
        this.dialogHide();
        this.growl.show({ severity: 'error', detail: "Data Deleted Successfully" });
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
                <Growl ref={(el) => this.growl = el} />
                <DataTable value={this.props.vendors} selectionMode="single"
                    header={header} footer={footer}
                    selection={this.state.selectedVendor}
                    onSelectionChange={e => this.setState
                        ({ selectedVendor: e.value })} onRowSelect={this.onVendorSelect}>
                    <Column field="id" header="Id" />
                    <Column field="name" header="Name" />
                    <Column field="logoUrl" header="Logo URL" />
                    <Column field="website" header="Site" />
                    <Column field="email" header="E-mail" />
                </DataTable>
                <Dialog visible={this.state.displayDialog} style={{ 'width': '500px' }}
                    header="Vendor Details" modal={true} footer={dialogFooter}
                    onHide={() => this.setState({ displayDialog: false })}>
                    {
                        this.state.vendor &&

                        <div className="p-grid p-fluid">

                            <div><label htmlFor="Name">Name</label></div>
                            <div>
                                <InputText id="name" onChange={(e) => { this.updateProperty('name', e.target.value) }}
                                    value={this.state.vendor.name} />
                            </div>

                            <div style={{ paddingTop: '10px' }}>
                                <label htmlFor="logoUrl">Logo( url)</label></div>
                            <div>
                                <InputText id="logoUrl" onChange={(e) => { this.updateProperty('logoUrl', e.target.value) }}
                                    value={this.state.vendor.logoUrl} />
                            </div>

                            <div style={{ paddingTop: '10px' }}>
                                <label htmlFor="website">web site</label></div>
                            <div>
                                <InputText id="website" onChange={(e) => { this.updateProperty('website', e.target.value) }}
                                    value={this.state.vendor.website} />
                            </div>

                            <div style={{ paddingTop: '10px' }}>
                                <label htmlFor="email">E-mail</label></div>
                            <div>
                                <InputText id="email" onChange={(e) => { this.updateProperty('email', e.target.value) }}
                                    value={this.state.vendor.email} />
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
)(VendorList);