import React, { Component } from 'react';
import TitreH3 from "../../../components/UI/Titres/TitreH3";
import bandeau from "../../../assets/images/bandeau.png";
import mer from "../../../assets/images/mer.png";
import bateaupapier from "../../../assets/images/bateaupapier.png";
import waves from "../../../assets/images/waves.png";
import boussole from "../../../assets/images/boussole.png";
import cadran from "../../../assets/images/cadran.png";

class Accueil extends Component {
    componentDidMount = () => {
        document.title = "Amarres & Matelots - Accueil";
    }
    render() {
        return (
            <div>
                <div className="tocover">
                
                    <div className="superposition">
                        <div className="bulle"></div>
                        <div className="bulle"></div>
                        <div className="bulle"></div>
                        <div className="bulle"></div>
                        <div className="bulle"></div>
                    </div>

                    <img src={bandeau} alt="bandeau" className="img-fluid" />
                </div>
                    <TitreH3><i>Au fil de l'eau ...</i></TitreH3>
                <div className="bandanim"></div>
                <div className="apropos">Moby Dick, Titanic, Queen Mary, L'Hermione, Princess ... On les baptise en leur 
                    donnant des noms évocateurs et pleins de tendresse.<br/>
                    Outil de travail ou objet de plaisir, ils bravent les flots, par tous temps.
                    "Fluctuat, nec mergitur" (<em>Il est battu par les flots, mais ne sombre pas</em>).<br/>
                    - Ohé Matelots, larguez les amarres !
                </div>

                <div className="bandeauMer">
                    <img src={mer} alt="bandeau" className="img-fluid" />
                    <div><img src={bateaupapier} alt="bateau en papier journal" className="bateaupapier" /></div>
                    <div><img src={boussole} alt="boussole" className="boussole" /></div>
                    <div><img src={cadran} alt="cadran" className="cadran" /></div>
                    <div><img src={cadran} alt="cadran" className="cadran2" /></div>
                    <div><img src={waves} alt="bateau en papier journal" className="waves" /></div>
                </div>
            </div>
        );
    }
}

export default Accueil;