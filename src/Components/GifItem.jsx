import PropTypes from 'prop-types';

export const GifItem = ({url, title}) => {
    return (
        <img src={url} alt={title} className='rounded-lg' />
    ); 
}

GifItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};
