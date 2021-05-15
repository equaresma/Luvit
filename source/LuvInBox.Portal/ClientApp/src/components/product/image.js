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
        let content = "";

        if (image) {
            if (image.type === 1) {
                let value = "";
                if (image.value.startsWith("[\"") && image.value.endsWith("\"]"))
                    value = image.value.substring(2, image.value.length - 2);

                if (value.startsWith("data:image")) {
                    content = value;
                } else {
                    content = `data:image/png;base64,${image.value}`;
                }
            } else {
                content = image.value;
            }
        }

        return content;
    }

    const renderImage = () => {
        let content = getContent();

        if (isUnobstrutive) {
            return (
                <img className={className} src={content} onError={(e) => e.target.src = 'images/not-founded.png'} />
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

