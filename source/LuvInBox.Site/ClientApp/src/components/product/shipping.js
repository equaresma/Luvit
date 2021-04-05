import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { userActions } from '../../_actions';

const Shipping = (props) => {
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

    
    return (
        renderImage()
    );
}

function mapStateToProps(state, ownProps) {
    return {
        isUnobstrutive: state.reducers.user.isUnobstrutive,
    };
}

export default connect(mapStateToProps)(Shipping);

