import React, { Component } from 'react';
import Produit from './Produit.js';
import './App.css';

class Gallerie extends Component {
  render() {
    return (
      <div className="Gallerie">
     	<Produit/>
     	<Produit/>
      </div>
    );
  }
}

export default Gallerie;
