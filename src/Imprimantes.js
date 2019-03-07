import React, { Component } from 'react';
import Gallerie from "./Gallerie.js";
import Filtre from "./Filtre.js";
import './App.css';

class Imprimantes extends Component {
  render() {
    return (
      <div className="Imprimantes">
        <p>Imprimantes</p>
        <div className="Market">
        	<Filtre/>
        	<Gallerie/>
        </div>
      </div>
    );
  }
}

export default Imprimantes;
