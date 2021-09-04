import axios from 'axios';
import apiKey from '../config';

let CatPhotos = {};
let BirdPhotos = {};
let DogPhotos = {};

axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cat&is_getty=true&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
        CatPhotos = response.data.photos.photo;
    })
    .catch(error => {
        console.log('Error fetching and parsing data', error);
    });

axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=bird&is_getty=true&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
        BirdPhotos = response.data.photos.photo;
    })
    .catch(error => {
        console.log('Error fetching and parsing data', error);
    });

axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dog&is_getty=true&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
        DogPhotos = response.data.photos.photo;
    })
    .catch(error => {
        console.log('Error fetching and parsing data', error);
    });

export { CatPhotos, BirdPhotos, DogPhotos };
