import React from 'react'
import logo from '../public/images/logo.svg';
import '../public/stylesheets/App.css';

const Notfound = function () {
    return (
        <div className="App">
            <header className="App-header">
                <h1>404</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Not Found
                </p>
            </header>
        </div>
    );
}

export default Notfound