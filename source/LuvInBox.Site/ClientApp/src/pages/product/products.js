import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { classNames } from 'primereact/components/utils/ClassNames';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Toolbar } from 'primereact/toolbar';
import { Editor } from 'primereact/editor';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { ColorPicker } from 'primereact/colorpicker';
import { productActions, categoryActions } from '../../_actions';
import ProductImage from '../../components/product/image';
import { Trans, useTranslation } from 'react-i18next';

import './index.css';
import { isArray } from 'util';

const Products = ({ onLoad = () => { }, products = [], categories = [], reload = true}) => {
    let emptyProduct = {
        id: null,
        barCode: null,
        name: '',
        description: '',
        category: null,
        image: null,
        price: 0,
        quantity: 0,
        rating: 0,
        dimension: {
            weight: 0,
            width: 0,
            height: 0,
            length: 0,
            description: ''
        },
        inventoryStatus: 'INSTOCK'
    };

    const { t } = useTranslation();
    const [color, setColor] = useState('FFF');
    const [category, setCategory] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    useEffect(() => {
        if (reload)
            onLoad();
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    const openNew = () => {
        setProductDialog(true);
        setSubmitted(false);
    }

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    }

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    }

    const hideDeleteProductsDialog = () => {
        setDeleteProductDialog(false);
    }

    const saveProduct = () => {
        setSubmitted(true);
        //put save code here
    }

    const editProduct = (product) => {
        setProduct(product);
        setProductDialog(true);
    }

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    }

    const deleteProduct = () => {
        let products = products.filter(val => val.id !== product.id);
        setDeleteProductDialog(false);

        toast.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
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
        dt.exportCSV();
    }

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    }

    const deleteSelectedProducts = () => {
        let products = products.filter(val => !selectedProducts.includes(val));
        setDeleteProductsDialog(false);

        toast.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    }

    const onCategoryChange = (e) => {
        let product = { ...product };
        product['category'] = e.value;
        setProduct(product);
    }

    const onInputChange = (e, name) => {
        let product = { ...product };

        if (name === "description") {
            let val = (e.target && e.target.htmlValue) || '';
            product[`${name}`] = val;
        } else {
            let val = (e.target && e.target.value) || '';
            product[`${name}`] = val;
        }

        setProduct(product);
    }

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let product = { ...product };
        product[`${name}`] = val;
        setProduct(product);
    }

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label={t('lbl_new')} icon="pi pi-plus" className="p-button-success p-mr-2" onClick={openNew} />
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

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
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

    const productDialogFooter = (
        <React.Fragment>
            <Button label={t('cancel')} icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label={t('save')} icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
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
            <Button label={t('no')} icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
            <Button label={t('yes')} icon="pi pi-check" className="p-button-text" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

    const imageBodyTemplate = (rowData) => {
        return <ProductImage image={rowData.image} className={"product-tumb"} />;
    }

    const categName = (rowData) => {
        if (isArray(categories) && categories.length > 0) {
            let id = rowData.categoryId;
            let categ = categories.find(({ categoryId }) => categoryId == id);

            if (categ)
                return categ.name;
            else
                return 'N/A';
        } else {
            return null;
        }
    }

    const onUploadError = (e) => {
        toast.show({ severity: 'danger', summary: 'Error', detail: e.xhr.responseText, life: 3000 });
    }

    const onUpload = (e) => {
        product.image.url = e.xhr.responseText;
        toast.show({ severity: 'success', summary: 'Success', detail: 'File uploaded', life: 3000 });
    }
    return (
        <div className="datatable-crud-demo">
            <Toast ref={toast} />

            <div className="card">
                <hr />
                <Toolbar className="p-mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                <DataTable ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                    dataKey="id" paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50, 100, 250, 500]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate={t("currentPageReportTemplate") + t("products")}
                    globalFilter={globalFilter}
                    header={header}>

                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                    <Column field="barcode" header={t("lbl_barcode")} sortable></Column>
                    <Column field="name" header={t("lbl_name")} sortable></Column>
                    <Column header={t("lbl_category")} sortable body={categName}></Column>
                    <Column field="price" header={t("lbl_price")} body={priceBodyTemplate} sortable></Column>
                    <Column header={t("lbl_image")} body={imageBodyTemplate}></Column>
                    <Column body={actionBodyTemplate}></Column>
                </DataTable>
            </div>

            <Dialog visible={productDialog} style={{ width: '750px' }} header={t("lbl_product_details")} modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                {product.image && <ProductImage image={product.image} className={"product-tumb"} />}
                <div className="p-field">
                    <label htmlFor="barcode"><Trans>lbl_barcode</Trans></label>
                    <InputNumber id="barcode" value={product.barcode} onValueChange={(e) => onInputNumberChange(e, 'barcode')} integerOnly />
                </div>
                <div className="p-field">
                    <label htmlFor="sku"><Trans>lbl_sku</Trans></label>
                    <InputNumber id="sku" value={product.sku} onValueChange={(e) => onInputNumberChange(e, 'sku')} integerOnly />
                </div>
                <div className="p-field">
                    <label htmlFor="mpn"><Trans>lbl_mpn</Trans></label>
                    <InputText id="mpn" value={product.mpn} onChange={(e) => onInputChange(e, 'mpn')} required autoFocus className={classNames('p-inputtext-sm p-d-block p-mb-2', { 'p-invalid': submitted && !product.mpn })} />                    
                </div>
                <div className="p-field">
                    <label htmlFor="name"><Trans>lbl_name</Trans></label>
                    <InputText id="name" value={product.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames('p-inputtext-sm p-d-block p-mb-2', { 'p-invalid': submitted && !product.name })} />
                    {submitted && !product.name && <small className="p-error">Name is required.</small>}
                </div>
                <div className="p-field">
                    <label htmlFor="description"><Trans>lbl_description</Trans></label>
                    <Editor id="description" style={{ height: '200px' }} value={product.description} onChange={(e) => onInputChange(e, 'description')} className="p-inputtext-sm p-d-block p-mb-2"/>
                </div>
                <div className="p-field">
                    <label htmlFor="category"><Trans>lbl_category</Trans></label>
                    <Dropdown optionLabel="name" optionValue="id" value={category} options={categories} onChange={(e) => setCategory(e.value)} placeholder={t("lbl_select_categ")} className="p-dropdown-sm p-mb-2"/>
                </div>                
                <h6><Trans>Dimensions</Trans></h6>
                <div className="p-formgrid p-grid">           
                    <div className="p-field p-col">
                        <label htmlFor="width"><Trans>lbl_Width</Trans></label>
                        <InputNumber id="width" value={product.dimension.width} onValueChange={(e) => onInputNumberChange(e, 'width')} mode="decimal" locale="en-US" minFractionDigits={2}/>
                    </div>
                    <div className="p-field p-col">
                        <label htmlFor="height"><Trans>lbl_Height</Trans></label>
                        <InputNumber id="height" value={product.dimension.height} onValueChange={(e) => onInputNumberChange(e, 'height')} mode="decimal" locale="en-US" minFractionDigits={2} />
                    </div>
                </div>
                <div className="p-formgrid p-grid">
                    <div className="p-field p-col">
                        <label htmlFor="length"><Trans>lbl_Length</Trans></label>
                        <InputNumber id="length" value={product.dimension.length} onValueChange={(e) => onInputNumberChange(e, 'length')} mode="decimal" locale="en-US" minFractionDigits={2}/>
                    </div>
                    <div className="p-field p-col">
                        <label htmlFor="weight"><Trans>lbl_Weight</Trans></label>
                        <InputNumber id="weight" value={product.dimension.weight} onValueChange={(e) => onInputNumberChange(e, 'weight')} mode="decimal" locale="en-US" minFractionDigits={2}/>
                    </div>
                </div>
                <div className="p-field">
                    <label htmlFor="dimension.description"><Trans>lbl_description</Trans></label>
                    <Editor id="dimension.description" style={{ height: '200px' }} value={product.description} onChange={(e) => onInputChange(e, 'description')} className="p-inputtext-sm p-d-block p-mb-2" />
                </div>
                <div className="p-field">
                    <label htmlFor="price"><Trans>lbl_price</Trans></label>
                    <InputNumber id="price" value={product.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="BRL" locale="pt-BR" />
                </div>
                <div className="p-field">
                    <label htmlFor="brand"><Trans>lbl_brand</Trans></label>
                    <InputText id="brand" value={product.brand} onChange={(e) => onInputChange(e, 'brand')} required autoFocus className={classNames('p-inputtext-sm p-d-block p-mb-2', { 'p-invalid': submitted && !product.name })} />
                    {submitted && !product.brand && <small className="p-error">brand is required.</small>}
                </div>
                <div className="p-field">
                    <label htmlFor="origin"><Trans>lbl_origin</Trans></label>
                    <InputText id="origin" value={product.origin} onChange={(e) => onInputChange(e, 'origin')} required autoFocus className={classNames('p-inputtext-sm p-d-block p-mb-2', { 'p-invalid': submitted && !product.name })} />
                    {submitted && !product.origin && <small className="p-error">origin is required.</small>}
                </div>
                <div className="p-field">
                    <label htmlFor="manufacturer"><Trans>lbl_manufacturer</Trans></label>
                    <InputText id="manufacturer" value={product.manufacturer} onChange={(e) => onInputChange(e, 'manufacturer')} required autoFocus className={classNames('p-inputtext-sm p-d-block p-mb-2', { 'p-invalid': submitted && !product.name })} />
                    {submitted && !product.manufacturer && <small className="p-error">manufacturer is required.</small>}
                </div>
                <div className="p-field">
                    <label htmlFor="completeDescription"><Trans>lbl_completeDescription</Trans></label>
                    <Editor id="completeDescription" style={{ height: '200px' }} value={product.description} onChange={(e) => onInputChange(e, 'completeDescription')} className="p-inputtext-sm p-d-block p-mb-2" />
                </div>
                <div className="p-field">
                    <label htmlFor="material"><Trans>lbl_material</Trans></label>
                    <Editor id="material" style={{ height: '100px' }} value={product.description} onChange={(e) => onInputChange(e, 'material')} className="p-inputtext-sm p-d-block p-mb-2" />
                </div>
                <div className="p-field">
                    <label htmlFor="usage"><Trans>lbl_usage</Trans></label>
                    <Editor id="usage" style={{ height: '100px' }} value={product.description} onChange={(e) => onInputChange(e, 'usage')} className="p-inputtext-sm p-d-block p-mb-2" />
                </div>
                <div className="p-field">
                    <label htmlFor="care"><Trans>lbl_care</Trans></label>
                    <Editor id="care" style={{ height: '100px' }} value={product.care} onChange={(e) => onInputChange(e, 'care')} className="p-inputtext-sm p-d-block p-mb-2" />
                </div>
                <div className="p-field">
                    <label htmlFor="color"><Trans>lbl_color</Trans></label>
                    <ColorPicker value={color} onChange={(e) => setColor(e.value)} format="hex" className="p-component p-mb-2" style={{marginLeft: 20}}/>
                </div>                
            </Dialog>

            <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header={t("tit_confirm")} modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                    {product && <span><Trans>tit_ask_delete_confirm</Trans><b> {product.name}</b>?</span>}
                </div>
            </Dialog>

            <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header={t("tit_confirm")} modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                    {product && <span><Trans>tit_ask_products_delete_confirm</Trans></span>}
                </div>
            </Dialog>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        products: Array.isArray(state.reducers.products.products) ? state.reducers.products.products : new Array(),
        categories: Array.isArray(state.reducers.category.categories) ? state.reducers.category.categories : new Array(),
        reload: state.reducers.products.reload,
        error: state.reducers.products.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onLoad: () => {
            dispatch(categoryActions.getAll())
            dispatch(productActions.getAll())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
