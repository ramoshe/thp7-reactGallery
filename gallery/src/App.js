import { Component } from 'react';
import axios from 'axios';
import apiKey from './config';
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

    componentDidUpdate() {
        console.log('update');
        //this.performSearch(this.state.currentTitle);
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
            <BrowserRouter>
                <div className="container">
                    <SearchForm onSearch={this.performSearch} />
                    <MainNav />
                    { (this.state.loading)
                     ? <h2 style={{color:"silver"}}>Loading...</h2>
                     : ( <Switch>
                        <Route exact path="/" render={ () => 
                            <PhotoContainer 
                                title={this.state.currentTitle}
                                data={this.state.data} /> } />

                        <Route path="/cat" render={ () => 
                            <PhotoContainer title={'cat'} data={CatPhotos} /> } />
                        <Route path="/bird" render={ () => 
                            <PhotoContainer title={'bird'} data={BirdPhotos} /> } />
                        <Route path="/dog" render={ () => 
                            <PhotoContainer title={'dog'} data={DogPhotos} /> } />
                        
                        <Route path="/search/:query" render={ () => 
                            <PhotoContainer 
                                title={this.state.currentTitle}
                                data={this.state.data} /> } />

                        <Route component={Error} />
                    </Switch> )}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;