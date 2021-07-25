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
        navTopics: [ "cat", "bird", "dog" ],
        navPhotos: [],
        currentTitle: 'sunset'
    }

    componentDidMount() {
        this.setNavPhotos(this.state.navTopics);
        this.performSearch(this.state.currentTitle);
    }

    setNavPhotos(topics) {
        let navPhotos = [];
        topics.map(topic => {
            return axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${topic}s&per_page=24&format=json&nojsoncallback=1`)
                .then(res => navPhotos.push(res.data.photos.photo))
                .catch(err => {console.log('Error fetching and parsing data', err)});
        });
        this.setState({ navPhotos });
    }

    performSearch = (query) => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}s&per_page=24&format=json&nojsoncallback=1`)
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
        const mainRoute = (<Route 
            exact path="/" 
            render={ () => <PhotoContainer 
                title={this.state.currentTitle}
                data={this.state.data}
            /> }
        />);
        
        const navRoutes = (
            this.state.navTopics.map((topic, index) => <Route 
                key={topic}
                path={`/${topic}`} 
                render={ () => <PhotoContainer 
                    title={topic}
                    data={this.state.navPhotos[index]}
                /> }
            /> )
        );

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
                                { mainRoute }
                                { navRoutes }
                            </Switch>
                        )
                    }
                </div>
            </BrowserRouter>
        );
    }
}

export default App;