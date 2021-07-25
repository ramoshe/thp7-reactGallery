import NotFound from './NotFound';
import Photo from './Photo';

const PhotoContainer = ({ data }) => {
    let photos;
    if (data.length > 0) {
        photos = data.map((url, index) => <Photo url={ url } key={ index } />);
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