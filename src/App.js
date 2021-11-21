import { Component } from 'react';
import axios from 'axios';
import { apiKey } from './config';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import PhotoContainer from './components/PhotoContainer';
import { CatPhotos, BirdPhotos, DogPhotos } from './components/PhotosForNav';
import Error from './components/404Error';

class App extends Component {
    
    state = {
        data: {},
        loading: true,
        currentTitle: 'sunset'
    }

    componentDidMount() {
        this.performSearch(this.state.currentTitle);
    }

    /**
     * Get flickr photo data based on the query
     * @param {string} query - search query term(s) 
     */
    performSearch = (query) => {
        this.setState({ loading: true });
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&is_getty=true&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    data: response.data.photos.photo,
                    loading: false,
                    currentTitle: query
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }
    
    render() {
        return (
            <BrowserRouter basename="/thp7-reactGallery">
                <div className="container">
                    <SearchForm onSearch={this.performSearch} />
                    <MainNav />
                    { (this.state.loading)
                     ? <h2 style={{color:"silver"}}>Loading...</h2>
                     : ( <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} render={ () => 
                            <PhotoContainer 
                                title={this.state.currentTitle}
                                data={this.state.data} 
                                onUpdate={this.performSearch} /> } />

                        <Route path={`${process.env.PUBLIC_URL}/cat`} render={ () => 
                            <PhotoContainer title={'cat'} data={CatPhotos} 
                                onUpdate={this.performSearch} /> } />
                        <Route path={`${process.env.PUBLIC_URL}/bird`} render={ () => 
                            <PhotoContainer title={'bird'} data={BirdPhotos} 
                                onUpdate={this.performSearch} /> } />
                        <Route path={`${process.env.PUBLIC_URL}/dog`} render={ () => 
                            <PhotoContainer title={'dog'} data={DogPhotos} 
                                onUpdate={this.performSearch} /> } />
                        
                        <Route path={`${process.env.PUBLIC_URL}/search/:query`} render={ ( {match} ) => 
                            <PhotoContainer 
                                title={match.params.query}
                                data={this.state.data}
                                onUpdate={this.performSearch} /> } />

                        <Route component={Error} />
                    </Switch> )}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;