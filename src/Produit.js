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
     			<li>Zortrax M200</li>
     			<li>2148€ TTC</li>
     			<li>1790€ HT</li>
     		</ul>
     	</div>
     	<ul className="Details">
     		<li>kiojuhiygut</li>
     		<li>juyutyrter</li>
     		<li>oiuyutyrdte</li>
     	</ul>
     	<ul className="Action">
     		<li className="gray">PLUS</li>
     		<li className="blue" >ACHETER</li>
     	</ul>
      </div>
    );
  }
}

export default Produit;
