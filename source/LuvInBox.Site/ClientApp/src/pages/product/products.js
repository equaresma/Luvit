import React, { useState, useEffect, useRef } from 'react';
import { connect, useSelector } from 'react-redux';
import { classNames } from 'primereact/components/utils/ClassNames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { Editor } from 'primereact/editor';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { ColorPicker } from 'primereact/colorpicker';
import { MultiSelect } from 'primereact/multiselect';
import { isArray } from 'util';
import { categoryActions, productActions, sizeActions } from '../../_actions';
import { Trans, useTranslation } from 'react-i18next';
import ReactFileReader from 'react-file-reader';
import ProductImage from '../../components/product/image';

import './index.css';

const Products = (props) => {
    const { t } = useTranslation();
    const categErrorMessage = useSelector(state => state.reducers.category?.error ?? null);
    const prdErrorMessage = useSelector(state => state.reducers.products?.error ?? null);
    const szErrorMessage = useSelector(state => state.reducers.size?.error ?? null);

    const [status] = useState([t("lbl_Inative"), t("lbl_Inputed"), t("lbl_Approved"), t("lbl_Revision"), t("lbl_Published")]);
    const [reload] = useState(true);
    const [products] = useState([]);
    const [category, setCategory] = useState(null);
    const [selectedSizes, setSelectedSizes] = useState(null);
    const [product, setProduct] = useState(props.product);
    const [color, setColor] = useState('#FFFFFF');
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const emptyProduct = {
        id: null,
        barCode: null,
        name: '',
        description: '',
        category: null,
        packageDimension: {
            weight: 0,
            width: 0,
            height: 0,
            length: 0,
            description: ''
        },
        dimension: '',
        brand: '',
        origin: '',
        manufacturer: '',
        completeDescription: '',
        material: '',
        usage: '',
        care: '',
        powerSupply: '',
        maturity: '',
        color: '',
        images: new Array(),
        sizes: new Array(),
        status: 0
    }

    useEffect(() => {
        if (reload)
            props.onLoad();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    }

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    }

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    }

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    }

    const saveProduct = () => {
        setSubmitted(true);

        if (isValid()) {
            props.onSave(product);
            setProductDialog(false);
            setProduct(emptyProduct);
        }
    }

    const editProduct = (prod) => {
        let id = prod.categoryId;

        setCategory(id);
        setProduct(prod);
        setColor(prod.color);
        setSelectedSizes(prod.sizes);
        setProductDialog(true);
    }

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    }

    const deleteProduct = () => {
        props.onDelete(product.id);

        setDeleteProductDialog(false);
    }

    const findIndexById = (id) => {
        let index = -1;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    const exportCSV = () => {
        dt.current.exportCSV();
    }

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    }

    const deleteSelectedProducts = () => {
        let _products = products.filter(val => !selectedProducts.includes(val));
        products = _products;

        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    }

    const onCategoryChange = (e) => {
        setCategory(e.value);

        let _product = { ...product };

        _product['categoryId'] = e.value;
        setProduct(_product);
    }

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _product = { ...product };

        _product[`${name}`] = val;
        setProduct(_product);
    }

    const onEditorChange = (e, name) => {
        let _product = { ...product };
        let content = (e.htmlValue) ? e.htmlValue : '';

        if (name == "dimension") {
            _product.packageDimension.description = content.replace('"', '\"').replace('\\', '\\\\');
        } else {
            _product[`${name}`] = content.replace('"', '\"').replace('\\', '\\\\');
        }

        setProduct(_product);
    }

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _product = { ...product };

        if (name == "dimension") {
            _product.packageDimension[`${e.target.id}`] = val;
        } else {
            _product[`${name}`] = val;
        }

        setProduct(_product);
    }

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label={t('lbl_new')} icon="pi pi-plus" className="p-button-help p-mr-2" onClick={openNew} />
                <Button label={t('lbl_delete')} icon="pi pi-trash" className="p-button-danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
            </React.Fragment>
        )
    }

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                <FileUpload mode="basic" accept="image/*" maxFileSize={1000000} label={t('lbl_import')} chooseLabel={t('lbl_import')} className="p-mr-2 p-d-inline-block" />
                <Button label={t('lbl_export')} icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />
            </React.Fragment>
        )
    }

    const imageBodyTemplate = (rowData) => {
        let img = null;

        if (isArray(rowData.images)) {
            img = rowData.images[0];
        } else {
            img = {
                type: 1,
                value: ""
            }
        }

        return <ProductImage image={img} className={"product-tumb"} />;
    }

    const colorBodyTemplate = (rowData) => {
        let colorHex = (rowData.color.startsWith("#")) ? rowData.color : "#" + (rowData.color === "") ? "FFFFFF" : rowData.color;

        return <div style={{ backgroundColor: colorHex, width: 30, height: 20 }}></div>;
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-help p-mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    }

    const statusBodyTemplate = (rowData) => {
        switch (rowData.status) {
            case -1: return status[0];
            case 0: return status[1];
            case 1: return status[2];
            case 2: return status[3];
            case 3: return status[4];
            default: return "";
        }
    }

    const header = (
        <div className="table-header">
            <h5 className="p-m-0"><Trans>tit_manage_products</Trans></h5><hr />
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder={t('search') + "..."} />
            </span>
        </div>
    );

    const isValid = () => {
        let _product = { ...product };

        if (!_product)
            return false;

        return (_product.sku && _product.mpn && _product.name && _product.categoryId);
    }

    const productDialogFooter = (
        <React.Fragment>
            <Button label={t("lbl_cancel")} icon="pi pi-times" className="p-button-text" onClick={hideDialog}/>
            <Button label={t("lbl_save")} icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
        </React.Fragment>
    );

    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
        </React.Fragment>
    );

    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

    const categName = (rowData) => {
        if (isArray(props.categories) && props.categories.length > 0) {
            let id = rowData.categoryId;
            let categ = props.categories.filter(c => c.id == id)[0];

            if (categ)
                return categ.name;
            else
                return 'N/A';
        } else {
            return null;
        }
    }

    const handleImgFiles = (files) => {
        let _product = { ...product };

        if (isArray(files)) {
            files.forEach(file => {
                _product.images.push({
                    type: 1,
                    value: JSON.stringify(file.base64)
                });

                toast.current.show({ severity: 'success', summary: 'File', file, life: 3000 });
            });
        } else {
            _product.images.push({
                type: 1,
                value: JSON.stringify(files.base64)
            });

            toast.current.show({ severity: 'success', summary: 'File', files, life: 3000 });
        }

        setProduct(_product);
    }

    const onSizesChange = (e) => {
        setSelectedSizes(e.value);

        let _product = { ...product };
        _product['sizes'] = selectedSizes;

        setProduct(_product);
    }

    const onUploadError = (e) => {
        toast.current.show({ severity: 'danger', summary: 'Error', detail: e.xhr.responseText, life: 3000 });
    }

    const onUpload = (e) => {
        product.image.url = e.xhr.responseText;
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'File uploaded', life: 3000 });
    }

    const onColorChange = (e) => {
        let _product = { ...product };

        _product['color'] = "#" + e.value;
        setProduct(_product);
    }

    return (
        <div className="datatable-crud-demo">
            <Toast ref={toast} />

            <div className="card">
                <div style={{ display: (categErrorMessage || prdErrorMessage || szErrorMessage) ? "" : "none" }}>
                    {categErrorMessage && <p><Trans>lbl_msg_categ_error</Trans>: {categErrorMessage}</p>}
                    {prdErrorMessage && <p><Trans>lbl_msg_prod_error</Trans>: {prdErrorMessage}</p>}
                    {szErrorMessage && <p><Trans>lbl_msg_sz_error</Trans>: {szErrorMessage}</p>}
                    <p><small><Trans>lbl_contact_adm</Trans></small></p>
                </div>
                <hr />
                <Toolbar className="p-mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                <DataTable ref={dt} value={props.products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                    dataKey="id" paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50, 100, 250, 500]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate={t("currentPageReportTemplate") + t("products")}
                    globalFilter={globalFilter}
                    header={header}>

                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                    <Column field="barCode" header={t("lbl_barcode")} sortable></Column>
                    <Column field="name" header={t("lbl_name")} sortable></Column>
                    <Column header={t("lbl_category")} sortable body={categName} sortable></Column>
                    <Column header={t("lbl_image")} body={imageBodyTemplate}></Column>
                    <Column header={t("lbl_color")} body={colorBodyTemplate}></Column>
                    <Column header="Status" body={statusBodyTemplate}></Column>
                    <Column body={actionBodyTemplate}></Column>
                </DataTable>
            </div>

            <Dialog visible={productDialog} style={{ width: '750px' }} header={t("lbl_product_details")} modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                <div className="p-field">
                    <label htmlFor="sku"><Trans>lbl_sku</Trans></label>
                    <InputText id="sku" defaultValue={product.sku} onChange={(e) => onInputChange(e, 'sku')} autoFocus maxLength="20" required required className={classNames('p-inputtext-sm p-d-block p-mb-2', { 'p-invalid': submitted && !product.sku })} />
                    {submitted && !product.sku && <small className="p-error"><Trans>msg_sku_required</Trans>.</small>}
                </div>
                <div className="p-field">
                    <label htmlFor="mpn"><Trans>lbl_mpn</Trans></label>
                    <InputText id="mpn" defaultValue={product.mpn} onChange={(e) => onInputChange(e, 'mpn')} maxLength="20" required required className={classNames('p-inputtext-sm p-d-block p-mb-2', { 'p-invalid': submitted && !product.mpn })} />
                    {submitted && !product.mpn && <small className="p-error"><Trans>msg_mpn_required</Trans>.</small>}
                </div>
                <div className="p-field">
                    <label htmlFor="barCode"><Trans>lbl_barcode</Trans></label>
                    <InputText id="barCode" defaultValue={product.barCode} onChange={(e) => onInputChange(e, 'barCode')} maxLength="20" />
                </div>
                <div className="p-field">
                    <label htmlFor="name"><Trans>lbl_name</Trans></label>
                    <InputText id="name" value={product.name} onChange={(e) => onInputChange(e, 'name')} required className={classNames('p-inputtext-sm p-d-block p-mb-2', { 'p-invalid': submitted && !product.name })} maxLength="200" />
                    {submitted && !product.name && <small className="p-error"><Trans>msg_name_required</Trans>.</small>}
                </div>
                <div className="p-field">
                    <label htmlFor="description"><Trans>lbl_description</Trans></label>
                    <Editor id="description" style={{ height: '200px' }} value={product.description} onTextChange={(e) => onEditorChange(e, 'description')} className="p-inputtext-sm p-d-block p-mb-2" maxLength="600" />
                </div>
                <div className="p-field">
                    <label htmlFor="category"><Trans>lbl_category</Trans></label>
                    <Dropdown optionLabel="name" optionValue="id" value={category} options={props.categories} onChange={onCategoryChange} placeholder={t("lbl_select_categ")} className={classNames('p-dropdown-sm p-mb-2', { 'p-invalid': submitted && !product.categoryId })} />
                    {submitted && !product.categoryId && <small className="p-error"><Trans>msg_category_required</Trans>.</small>}
                </div>
                <h6><Trans>lbl_package</Trans></h6>
                <div className="p-formgrid p-grid">
                    <div className="p-field p-col">
                        <label htmlFor="width"><Trans>lbl_width</Trans></label>
                        <InputNumber id="width" value={product.packageDimension.width} onValueChange={(e) => onInputNumberChange(e, 'dimension')} mode="decimal" locale="en-US" minFractionDigits={2} />
                    </div>
                    <div className="p-field p-col">
                        <label htmlFor="height"><Trans>lbl_height</Trans></label>
                        <InputNumber id="height" value={product.packageDimension.height} onValueChange={(e) => onInputNumberChange(e, 'dimension')} mode="decimal" locale="en-US" minFractionDigits={2} />
                    </div>
                </div>
                <div className="p-formgrid p-grid">
                    <div className="p-field p-col">
                        <label htmlFor="length"><Trans>lbl_length</Trans></label>
                        <InputNumber id="length" value={product.packageDimension.length} onValueChange={(e) => onInputNumberChange(e, 'dimension')} mode="decimal" locale="en-US" minFractionDigits={2} />
                    </div>
                    <div className="p-field p-col">
                        <label htmlFor="weight"><Trans>lbl_weight</Trans></label>
                        <InputNumber id="weight" value={product.packageDimension.weight} onValueChange={(e) => onInputNumberChange(e, 'dimension')} mode="decimal" locale="en-US" minFractionDigits={2} />
                    </div>
                </div>
                <div className="p-field">
                    <label htmlFor="dimension"><Trans>tit_dimensions</Trans></label>
                    <Editor id="dimension" name="dimension" style={{ height: '200px' }} value={product.packageDimension.description} onTextChange={(e) => onEditorChange(e, 'dimension')} className="p-inputtext-sm p-d-block p-mb-2" maxLength="600" />
                </div>
                <div className="p-field">
                    <label htmlFor="brand"><Trans>lbl_brand</Trans></label>
                    <InputText id="brand" value={product.brand} onChange={(e) => onInputChange(e, 'brand')} className="p-inputtext-sm p-d-block p-mb-2" maxLength="80" />
                </div>
                <div className="p-field">
                    <label htmlFor="origin"><Trans>lbl_origin</Trans></label>
                    <InputText id="origin" value={product.origin} onChange={(e) => onInputChange(e, 'origin')} className="p-inputtext-sm p-d-block p-mb-2" maxLength="120" />
                </div>
                <div className="p-field">
                    <label htmlFor="manufacturer"><Trans>lbl_manufacturer</Trans></label>
                    <InputText id="manufacturer" value={product.manufacturer} onChange={(e) => onInputChange(e, 'manufacturer')} className="p-inputtext-sm p-d-block p-mb-2" maxLength="100" />
                </div>
                <div className="p-field">
                    <label htmlFor="completeDescription"><Trans>lbl_completeDescription</Trans></label>
                    <Editor id="completeDescription" name="completeDescription" style={{ height: '200px' }} value={product.completeDescription} onTextChange={(e) => onEditorChange(e, 'completeDescription')} className="p-inputtext-sm p-d-block p-mb-2" maxLength="4000" />
                </div>
                <div className="p-field">
                    <label htmlFor="material"><Trans>lbl_material</Trans></label>
                    <Editor id="material" name="material" style={{ height: '100px' }} value={product.material} onTextChange={(e) => onEditorChange(e, 'material')} className="p-inputtext-sm p-d-block p-mb-2" maxLength="600" />
                </div>
                <div className="p-field">
                    <label htmlFor="usage"><Trans>lbl_usage</Trans></label>
                    <Editor id="usage" name="usage" style={{ height: '100px' }} value={product.usage} onTextChange={(e) => onEditorChange(e, 'usage')} className="p-inputtext-sm p-d-block p-mb-2" maxLength="600" />
                </div>
                <div className="p-field">
                    <label htmlFor="care"><Trans>lbl_care</Trans></label>
                    <Editor id="care" name="care" style={{ height: '100px' }} value={product.care} onTextChange={(e) => onEditorChange(e, 'care')} className="p-inputtext-sm p-d-block p-mb-2" maxLength="600" />
                </div>
                <div className="p-field">
                    <label htmlFor="powersupply"><Trans>lbl_power_supply</Trans></label>
                    <Editor id="powersupply" name="powerSupply" style={{ height: '100px' }} value={product.powerSupply} onTextChange={(e) => onEditorChange(e, 'powerSupply')} className="p-inputtext-sm p-d-block p-mb-2" maxLength="255" />
                </div>
                <div className="p-field">
                    <label htmlFor="maturity"><Trans>lbl_maturity</Trans></label>
                    <Editor id="maturity" name="maturity" style={{ height: '100px' }} value={product.maturity} onTextChange={(e) => onEditorChange(e, 'maturity')} className="p-inputtext-sm p-d-block p-mb-2" maxLength="255" />
                </div>
                <div className="p-field">
                    <label htmlFor="color"><Trans>lbl_available_sizes</Trans></label>
                    <MultiSelect value={selectedSizes} options={props.sizes} onChange={(e) => onSizesChange(e)} />
                </div>
                <div className="p-field">
                    <label htmlFor="color"><Trans>lbl_color</Trans></label>
                    <ColorPicker value={color} onChange={(e) => onColorChange(e)} format="hex" className="p-component p-mb-2" style={{ marginLeft: 20 }} />
                </div>
                <h6><Trans>lbl_images</Trans></h6>
                <ReactFileReader fileTypes="image/*" base64={true} multipleFiles={true} handleFiles={handleImgFiles}>
                    <Button label={t('lbl_import')} icon="pi pi-plus" className="p-button-plain p-mr-2" />
                </ReactFileReader>
            </Dialog>

            <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                    {product && <span>Are you sure you want to delete <b>{product.name}</b>?</span>}
                </div>
            </Dialog>

            <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                    {product && <span>Are you sure you want to delete the selected products?</span>}
                </div>
            </Dialog>
        </div>
    );
}

function mapStateToProps(state) {
    let ss = Array.isArray(state.reducers.size.sizes) ? state.reducers.size.sizes : new Array();
    let selectableSizes = new Array();

    if (ss.length > 0) {
        ss.forEach((item) => {
            selectableSizes.push({
                label: `${item.name} - ${item.description}`,
                value: item.id
            });
        });
    }

    return {
        product: state.reducers.products.product,
        categories: Array.isArray(state.reducers.category.categories) ? state.reducers.category.categories : new Array(),
        products: Array.isArray(state.reducers.products.products) ? state.reducers.products.products : new Array(),
        sizes: selectableSizes,
        reload: state.reducers.products.reload
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onLoad: () => {
            dispatch(categoryActions.getAll())
            dispatch(productActions.getAll())
            dispatch(sizeActions.getAll())
        },
        onSave: (product) => {
            dispatch(productActions.save(product))
        },
        onDelete: (productId) => {
            dispatch(productActions.deleteProduct(productId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
