import React, { Component } from 'react';
import TitreH3 from "../../../components/UI/Titres/TitreH3";
import bandeau from "../../../assets/images/bandeau.png";
import boutre from "../../../assets/images/Boutre.png";
import pirogue from "../../../assets/images/pirogue-indonesie.png";
import balsa from "../../../assets/images/balsa.png";
import jonke from "../../../assets/images/jonke.png";
import sampan from "../../../assets/images/sampan.png";
import kayak from "../../../assets/images/kayak.png";
import croisieriste from "../../../assets/images/croisieriste.png";
import catamaran from "../../../assets/images/catamaran.png";

class Accueil extends Component {
    componentDidMount = () => {
        document.title = "Amarres & Matelots - Accueil";
    }
    render() {
        return (
            <div>
            <div className="tocover">
            
                <div className="superposition">
                    <div className="bulle"><a href="/" alt="accroche">...</a></div>
                    <div className="bulle"><a href="/" alt="accroche">...</a></div>
                    <div className="bulle"><a href="/" alt="accroche">...</a></div>
                    <div className="bulle"><a href="/" alt="accroche">...</a></div>
                    <div className="bulle"><a href="/" alt="accroche">...</a></div>
                </div>

                <img src={bandeau} alt="bandeau" className="img-fluid" />
                </div>
                <TitreH3><i>Au fil de l'eau ...</i></TitreH3>
                <div className="bandanim">
                </div>
                    <div className="apropos">Moby Dick, Titanic, Queen Mary, L'Hermione, Princess ... On les baptise en leur 
                    donnant des noms évocateurs et pleins de tendresse, d'attention. Comme s'ils pouvaient rire ou pleurer
                    avec nous en refaisant le tour de la Terre, le film de notre vie ... <br/>
                        Eux, ce sont les bateaux, les embarcations, banales ou mythiques, dont nous avons toujours entendu parler ou
                        le petit objet flottant qui nous emmène voguer avec lui sur l'étang du bourg. Chaque embarcation a sa vie,
                        sa naissance, son histoire, ses traditions (eh oui !). <br/>
                        Ohé Matelots, larguez les amarres !
                    </div>
                <div className="container">
                    <div className="row">
                        <div className="column">
                            <div className="card">
                                <img src={boutre} width='600rem' alt="Boutre" className="img-fluid" />
                                <p>Lorem ipsum dolor sit amet ccoonsectetur adipisicing elit.
                                    Doloribus praesentium saepe accusamus neque tenetur,
                                    quae eos aut magnam eum, labore quas nesciunt.
                                    
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <img src={balsa} width='600rem' alt="balsa" className="img-fluid" />
                                <p>Lorem ipsum dolor sit amet ccoonsectetur adipisicing elit.
                                    Doloribus praesentium saepe accusamus neque tenetur,
                                    quae eos aut magnam eum, labore quas nesciunt.
                                   
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <img src={pirogue} width='600rem' alt="Boutre" className="img-fluid" />
                                <p>Lorem ipsum dolor sit amet ccoonsectetur adipisicing elit.
                                    Doloribus praesentium saepe accusamus neque tenetur,
                                    quae eos aut magnam eum, labore quas nesciunt.
                                   
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <img src={jonke} width='600rem' alt="jonke" className="img-fluid" />
                                <p>Lorem ipsum dolor sit amet ccoonsectetur adipisicing elit.
                                    Doloribus praesentium saepe accusamus neque tenetur,
                                    quae eos aut magnam eum, labore quas nesciunt.
                                    
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                               <img src={sampan} width='600rem' alt="sampan" className="img-fluid" />
                                <p>Lorem ipsum dolor sit amet ccoonsectetur adipisicing elit.
                                    Doloribus praesentium saepe accusamus neque tenetur,
                                    quae eos aut magnam eum, labore quas nesciunt.
                                    
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                               <img src={kayak} width='600rem' alt="kayak" className="img-fluid" />
                                <p>Lorem ipsum dolor sit amet ccoonsectetur adipisicing elit.
                                    Doloribus praesentium saepe accusamus neque tenetur,
                                    quae eos aut magnam eum, labore quas nesciunt.
                                   
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <img src={croisieriste} width='600rem' alt="croisieriste" className="img-fluid" />
                                <p>Lorem ipsum dolor sit amet ccoonsectetur adipisicing elit.
                                    Doloribus praesentium saepe accusamus neque tenetur,
                                    quae eos aut magnam eum, labore quas nesciunt.
                                   
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <img src={catamaran} width='600rem' alt="catamaran" className="img-fluid" />
                                <p>Lorem ipsum dolor sit amet ccoonsectetur adipisicing elit.
                                    Doloribus praesentium saepe accusamus neque tenetur,
                                    quae eos aut magnam eum, labore quas nesciunt.
                                   
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Accueil;