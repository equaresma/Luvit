import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { userActions } from '../../_actions';

const ProductImage = (props) => {
    const dispatch = useDispatch();
    const { isUnobstrutive } = props;
    const { image } = props;
    const { className } = props;

    useEffect(() => {
        dispatch(userActions.getUnobstrutive());
    }, []);

    const getContent = () => {
        let content = (image.type == 1) ? "data:image/png;base64," : "";
        content += image.value;
        return content;
    }

    const renderImage = () => {
        let content = getContent();

        if (isUnobstrutive) {
            return (
                <img className={className} src={content} alt={image.name} onError={(e) => e.target.src = 'images/not-founded.png'} />
            );
        } else {
            return (
                <img src='images/hidden_image.png' alt='hidden_image' />
            );
        }
    }

    return (
        renderImage()
    );
}

function mapStateToProps(state, ownProps) {
    return {
        isUnobstrutive: state.reducers.user.isUnobstrutive,
    };
}

export default connect(mapStateToProps)(ProductImage);

