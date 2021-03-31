import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { SelectButton } from 'primereact/selectbutton';
import { Dropdown } from 'primereact/dropdown';
import { Rating } from 'primereact/rating';
import { cartActions } from '../../_actions';
import { useTranslation } from 'react-i18next';
import './index.css';

export const ProductViewer = (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const options = [
        { icon: 'pi pi-bars', value: 'list' },
        { icon: 'pi pi-th-large', value: 'grid' }
    ];


    const [layout, setLayout] = useState('grid');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const sortOptions = [
        { label: t('lbl_sort_by_h_l'), value: '!price' },
        { label: t('lbl_sort_by_l_h'), value: 'price' },
    ];

    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        }
        else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    }

    const addProd = (product) => {
        dispatch(cartActions.addProduct(product))
    }

    const getContent = (product) => {
        let content = (product.image.type == 1) ? "data:image/png;base64," : "";
        content += product.image.value;
        return content;
    }

    const renderListItem = (data) => {
        return (
            <div className="p-col-12">
                <div className="product-list-item">
                    <img src={getContent(data)} alt={data.name} onError={(e) => e.target.src = 'images/not-founded.png'} />
                    <div className="product-list-detail">
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                        <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">R$ {data.price}</span>
                        <Button icon="pi pi-shopping-cart" className="p-button-help p-button-rounded" onClick={(e) => addProd(data)} />
                    </div>
                </div>
            </div>
        );
    }

    const renderGridItem = (data) => {
        return (
            <div className="p-col-12 p-md-4">
                <div className="product-grid-item card">
                    <div className="product-grid-item-top">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">{data.category}</span>
                        </div>
                    </div>
                    <div className="product-grid-item-content">
                        <img src={getContent(data)} alt={data.name} onError={(e) => e.target.src = 'images/not-founded.png'} />
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                    </div>
                    <div className="product-grid-item-bottom">
                        <span className="product-price">R$ {data.price}</span>
                        <Button icon="pi pi-shopping-cart" className="p-button-help p-button-rounded" onClick={(e) => addProd(data)} />
                    </div>
                </div>
            </div>
        );
    }

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === 'list')
            return renderListItem(product);
        else if (layout === 'grid')
            return renderGridItem(product);
    }

    const justifyTemplate = (option) => {
        return <i className={option.icon}></i>;
    }

    const header = (
        <div className="p-grid">
            <div className="p-col-6">
                <Dropdown options={sortOptions} value={sortKey} placeholder={t("lbl_sort_by")} onChange={onSortChange} />
            </div>
            <div className="p-col-6">
                <SelectButton value={layout} options={options} onChange={(e) => setLayout(e.value)} itemTemplate={justifyTemplate} />
            </div>
        </div>
    );

    return (
        <div className="dataview-demo">
            <div className="card">
                <DataView value={props.products} layout={layout} header={header}
                    itemTemplate={itemTemplate} paginator rows={8}
                    sortOrder={sortOrder} sortField={sortField} />
            </div>
        </div>
    );
}