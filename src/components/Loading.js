import '../styles/Loading.scss';
import PropTypes from 'prop-types';

function Loading(props) {

    if (props.isLoading === false) {
        return null
    }
    else {

        return (
            <span className="loading" />
        )
    }
}
Loading.propTypes = {
    isLoading: PropTypes.bool,
}

export default Loading;