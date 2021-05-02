import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'primereact/carousel';
import { Tooltip } from 'primereact/tooltip';
import { Link } from 'react-router-dom';
import { productActions, categoryActions } from '../../_actions';

import './carouselCategory.css';

const CarouselCategory = ({ categs = [], onLoad = () => { }, onCategSelected, reload = true, action = 'category', }) => {

    useEffect(() => {
        if (reload) {
            onLoad();
        }
    },[]);

    const categClick = (id) => {
        onCategSelected(id);
    }

    const categTemplate = (categ) => {
        return (
            <div className="categ-template">
                <Tooltip target=".img-category" mouseTrack mouseTrackLeft={10} className="toolTip" />
                <Link to="" onClick={(e) => categClick(categ.id)}>
                    <img className="img-category increase" src={categ.url} alt={categ.name} data-pr-tooltip={categ.name}/>
                </Link>
            </div>
        );
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="card mCointaner">
                        <Carousel value={categs} numVisible={8} numScroll={1} className="custom-carousel" circular
                            itemTemplate={categTemplate} indicatorsContentClassName="hideIndicators" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    if (ownProps.action === "category") {
        return {
            categs: Array.isArray(state.reducers.category.categories) ? state.reducers.category.categories : new Array(),
            reload: state.reducers.category.reload,
            error: state.reducers.category.error
        };
    } else {
        return {
            categs: Array.isArray(state.reducers.category.categories) ? state.reducers.category.categories : new Array(),
            reload: state.reducers.category.reload,
            error: state.reducers.products.error
        };
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onLoad: () => {
            ownProps.action = 'category';
            dispatch(categoryActions.getAll());
        },
        onCategSelected: (id) => {
            ownProps.action = 'products';
            dispatch(productActions.getByCategory(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselCategory);
