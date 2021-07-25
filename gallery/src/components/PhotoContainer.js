import NotFound from './NotFound';
import Photo from './Photo';

const PhotoContainer = ({ data }) => {
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
            <h2>Results</h2>
            <ul>
                { photos }
            </ul>
        </div>
    );
}

export default PhotoContainer;