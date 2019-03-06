import React, { Component } from 'react';
import Miniature from './images/miniatures.png';
import './App.css';


class Produit extends Component {
  render() {
    return (
      <div className="Produit">
     	<div className="Demo">
     		<img src={Miniature} />
     		<ul>
     			<li>Nom</li>
     			<li>Prix</li>
     			<li>Prix TTC</li>
     		</ul>
     	</div>
     	<ul className="Details">
     		<li>kiojuhiygut</li>
     		<li>juyutyrter</li>
     		<li>oiuyutyrdte</li>
     	</ul>
     	<ul className="Action">
     		<li>PLUS</li>
     		<li>ACHETER</li>
     	</ul>
      </div>
    );
  }
}

export default Produit;
