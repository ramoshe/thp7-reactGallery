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
        currentTitle: 'sunset'
    }

    componentDidMount() {
        this.performSearch(this.state.currentTitle);
    }

    performSearch = (query) => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}s&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    data: response.data.photos.photo,
                    loading: false,
                    currentTitle: query
                });
                return response.data.photos.photo;
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }
    
    render() {
        const photos = () => {
            return <PhotoContainer 
                title={this.state.currentTitle}
                data={this.state.data}
            />
        };
        
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
                                <Route exact path="/" render={ () => photos() } />
                                <Route path="/cat" render={ () => {
                                    this.performSearch("cat");
                                    return photos() }}
                                />
                                <Route path="/bird" render={ () => {
                                    this.performSearch("bird");
                                    return photos() }}
                                />
                                <Route path="/dog" render={ () => {
                                    this.performSearch("dog");
                                    return photos() }}
                                />
                            </Switch>
                        )
                    }
                </div>
            </BrowserRouter>
        );
    }
}

export default App;