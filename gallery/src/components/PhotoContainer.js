import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import NotFound from './NotFound';
import Photo from './Photo';

const PhotoContainer = ({ data, title }) => {
    /**
     * Set photo list items, or "Not Found" list item
     */
    let photos;
    if (data.length > 0) {
        photos = data.map(photo => {
            photo.url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
            return <Photo url={photo.url} alt={photo.title} key={ photo.id } />
        });
    } else {
        photos = <NotFound />;
    }

    return (
        <div className="photo-container">
            <h2>{ title } Photos</h2>
            <ul>
                { photos }
            </ul>
        </div>
    );
}

PhotoContainer.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        server: PropTypes.string,
        secret: PropTypes.string
    }))
}

export default withRouter(PhotoContainer);