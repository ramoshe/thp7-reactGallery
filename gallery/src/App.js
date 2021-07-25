import { Component } from 'react';
import axios from 'axios';
import apiKey from './config';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import PhotoContainer from './components/PhotoContainer';

class App extends Component {
    
    state = {
        data: {},
        loading: true
    }

    componentDidMount() {
        this.performSearch()
    }

    performSearch = (query = 'sunsets') => {
        const flickrSearchAPIUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}s&per_page=24&format=json&nojsoncallback=1`;
        axios.get(flickrSearchAPIUrl)
            .then(response => {
                this.setState({
                    data: response.data.photos.photo,
                    loading: false
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
                        ? <h2>Loading...</h2>
                        : (
                        <Switch>
                            <Route exact path="/" render={ () => <PhotoContainer data={this.state.data} /> } />
                            <Route path="/calm" render={ () => {
                                this.performSearch('calm');
                                return <PhotoContainer data={this.state.data} /> }} />
                            <Route path="/light" render={ () => {
                                this.performSearch('light');
                                return <PhotoContainer data={this.state.data} /> }} />
                            <Route path="/bliss" render={ () => {
                                this.performSearch('bliss');
                                return <PhotoContainer data={this.state.data} /> }} />
                        </Switch>)
                    }
                </div>
            </BrowserRouter>
        );
    }
}

export default App;