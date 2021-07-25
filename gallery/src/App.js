import { Component } from 'react';
//import apiKey from './config';
import { BrowserRouter } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import PhotoContainer from './components/PhotoContainer';

class App extends Component {
    
    state = {
        data: [
            "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
            "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
            "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg",
            "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg"
        ]
    }

    // flickrSearchAPIUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=sunsets&per_page=24&format=json&nojsoncallback=1`;
    
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <SearchForm />
                    <MainNav />
                    <PhotoContainer data={this.state.data} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;