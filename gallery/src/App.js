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
        loading: true,
        navTopics: [ "calm", "light", "bliss" ],
        navPhotos: []
    }

    componentDidMount() {
        this.setNavPhotos(this.state.navTopics);
        this.performSearch('sunset');
    }

    setNavPhotos(topics) {
        let navPhotos = [];
        topics.map(topic => {
            axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${topic}s&per_page=24&format=json&nojsoncallback=1`)
                .then(res => navPhotos.push(res.data.photos.photo))
                .catch(err => {console.log('Error fetching and parsing data', err)});
        });
        this.setState({ navPhotos });
    }

    performSearch = (query) => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}s&per_page=24&format=json&nojsoncallback=1`)
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
                    <MainNav labels={this.state.navTopics} />
                    { 
                        (this.state.loading)
                         ? <h2 style={{color:"silver"}}>Loading...</h2>
                         : (
                            <Switch>
                                <Route exact path="/" render={ () => <PhotoContainer data={this.state.data} /> } />
                                {
                                    this.state.navTopics.map((topic, index) => {
                                        return (<Route path={`/${topic}`} render={ () => <PhotoContainer data={this.state.navPhotos[index]} /> } />);
                                    })
                                }
                            </Switch>
                        )
                    }
                </div>
            </BrowserRouter>
        );
    }
}

export default App;