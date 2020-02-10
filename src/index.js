import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './componets/App';
import Home from './componets/Home';
import { BrowserRouter, Route } from 'react-router-dom';
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';



import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'popper.js';

// import "../node_modules/jquery/dist/jquery.min.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

{/* <Route exact path="/" component={Users} /> */ }
{/* <Route path="/details" component={Details} /> */ }
// ReactDOM.render(  <BrowserRouter><Menu /></BrowserRouter>, document.getElementById('nav'));
// ReactDOM.render(<Menu />, document.getElementById('nav'));
// ReactDOM.render(<App />, document.getElementById('content'));
ReactDOM.render(<BrowserRouter><Route exact path="/" component={App} /></BrowserRouter>, document.getElementById('content'));
ReactDOM.render(<BrowserRouter><Route path="/cakes" component={App} /></BrowserRouter>, document.getElementById('content'));
ReactDOM.render(<BrowserRouter><Route path="/home" component={Home} /></BrowserRouter>, document.getElementById('content'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
