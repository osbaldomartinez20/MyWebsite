import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import './public/stylesheets/index.css';
import App from './routes/App';
import About from './routes/about';
import Resume from './routes/resume'
import Transcript from './routes/transcript';
import NotFound from "./routes/notfound"
import * as serviceWorker from './helpers/serviceWorker';

const routing = (
    <Router>
        <div>
            <nav className="navbar">
                <ul id="menu">
                    <li>
                        <Link to="/" className="link">Home </Link>
                    </li>
                    <li>
                        <Link to="/about" className="link">About</Link>
                    </li>
                    <li id="right">
                    <Link to="/resume" className="link">Résumé</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About}/>
                <Route path="/resume" component={Resume} />
                <Route path="/transcript" component={Transcript} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
