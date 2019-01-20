import React, { Component } from 'react';
import Gallerie from "./Gallerie.js";
import Filtre from "./Filtre.js";
import Singe from "./images/singe.png";
import './App.css';

class Conception extends Component {
  render() {
    return (
      <div className="Conception">
        <h1>NOS SERVICES</h1>
        <h2>MODÉLISATION</h2>
        <div className="modelisation">
          <img src={Singe} alt="" />
          <p>3dmagicprint modélise sur mesure<br/>
          votre objet dans un logiciel 3D de manière à ce<br/>
          que le modèle soit 100% imprimable.</p> 
        </div>
        <h2>PRINT</h2>
        <div className="print">
          <p>3dmagicprint vous imprime votre modèle<br/>
          avec le(s) matériau(x) de votre choix et en<br/>
          assure la finition.<br/>
          (ponçage, post-traitement...)</p>
          <img src={Singe} alt="" /> 
        </div>
        <h2>FORMATION</h2>
        <div className="formation">
          <img src={Singe} alt="" />
          <p>Envie de vous lancer dans l’impression 3D ?<br/>
          3dmagicprint se met à votre service et vous <br/>
          propose une initiation à l’impression 3D.<br/>
          (Installation, utilisation et entretien des<br/>
          machines,  apprentissage des logiciels <br/>
          d’impression... )</p> 
        </div>
      </div>
    );
  }
}

export default Conception;
