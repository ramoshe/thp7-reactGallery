import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import NotFound from './NotFound';
import Photo from './Photo';

class PhotoContainer extends Component {

    static propTypes = {
        title: PropTypes.string,
        data: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            server: PropTypes.string,
            secret: PropTypes.string
        })),
        onUpdate: PropTypes.func
    }

    componentDidUpdate() {
        this.props.onUpdate(this.props.title);
    }

    render() {
        const { data, title } = this.props;
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
}

export default withRouter(PhotoContainer);