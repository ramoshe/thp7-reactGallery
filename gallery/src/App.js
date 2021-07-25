import React from 'react';
import apiKey from './config';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import PhotoContainer from './components/PhotoContainer';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <SearchForm />
                <MainNav />
                <PhotoContainer />
            </div>
        </BrowserRouter>
    );
}

export default App;
