import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header.js';
import Imprimantes from './Imprimantes.js';
import Accessoires from './Accessoires.js';
import Consommables from './Consommables.js';
import Conception from './Conception';
import 'animate.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Router >
        <div className="Menu">
        <ul className="Navig">
            <li className="BorderRight" >
            <Link to="/">Regarde</Link>
            </li>
            <li className="BorderRight">
            <Link to="/Consommables/">Aurélie</Link>
            </li>
            <li className="BorderRight">
            <Link to="/Accessoires/">on</Link>
            </li>
            <li>
            <Link to="/Conception/">BOSSE !</Link>
            </li>
        </ul>
        <div className="Content">
        <Route path="/" exact component={Imprimantes} />
      <Route path="/Consommables/" component={Consommables} />
      <Route path="/Accessoires/" component={Accessoires} />
      <Route path="/Conception/" component={Conception} />
      </div>
      </div>
      </Router>
      </div>
    );
  }
}

export default App;
