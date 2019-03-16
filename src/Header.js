import React, { Component } from 'react';
import './App.css';
import Logo from './images/logo_3dmp.png';
import Mail from './images/mail.png';
import Tel from './images/tel.png';
import Loupe from './images/loupe.png';
import Devis from './images/devis.png';
import Panier from './images/panier.png';


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <p>Vente d’imprimantes 3D, de consommables et d’accessoires  |  Réalisation, conception et impression d’objets 3D pour particuliers</p>
        <div id='HeaderList'>
        	
        	
        		<img id='Mail' src={Mail}/>
        		<img id='Tel' src={Tel}/>
        
        	<img src={Logo}/>
        	<div className='Vertical'>
        		<img id='devis' src={Devis}/>
        		<p className="DemandeDevis">Demander un<br/> devis</p>
        	</div>
        	<div className='Vertical'>
        		<img id='panier' src={Panier}/>
        		<p className="DemandeDevis">Mon panier :</p>
        	</div>
        </div>
      </div>
    );
  }
}

export default Header;
