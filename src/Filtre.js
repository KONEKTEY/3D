import React, { Component } from 'react';
import './App.css';

class Filtre extends Component {
  render() {
    return (
      <div className="Filtre">
     	<h2>FILTRER</h2>
     	<form>
     	<p>TECHNOLOGIES D'IMPRESSION</p>
     	<ul>
     	<li><input type="checkbox"/>FDM</li>
     	<li><input type="checkbox"/>Résine</li>
     	<li><input type="checkbox"/>Poudre SLS</li>
     	</ul>
     	</form>
    	
      </div>
    );
  }
}

export default Filtre;
