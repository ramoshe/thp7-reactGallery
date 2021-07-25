import NotFound from './NotFound';
import Photo from './Photo';

const PhotoContainer = () =>
    <div className="photo-container">
        <h2>Results</h2>
        <ul>
            <Photo />
            <NotFound />
        </ul>
    </div>;

export default PhotoContainer;