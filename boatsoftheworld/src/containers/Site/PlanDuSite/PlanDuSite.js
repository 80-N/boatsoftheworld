import React, { Component } from 'react';
import TitreH3 from "../../../components/UI/Titres/TitreH3";

class PlanDuSite extends Component {
    componentDidMount = () => {
        document.title = "Amarres & Matelots - Plan du site";
    }

    render() {
        return (
            <>
                <TitreH3 bgColor="bg-primary">Plan du site</TitreH3>
                <div className="planContainer">
                    <ul className="planDuSite">
                        <li><a href="https://www.amarresetmatelots.fr/" >Accueil</a></li>
                        <li><a href="https://www.amarresetmatelots.fr/bateaux" >Bateaux</a></li>
                        <li><a href="https://www.amarresetmatelots.fr/contact" >Contact</a></li>
                        <li><a href="https://www.amarresetmatelots.fr/mentionsLegales" >Mentions Légales</a></li>
                        <li><a href="https://www.amarresetmatelots.fr/plandusite" >Plan du site</a></li>
                    </ul>
                </div>   
            </>
        );
    }
}

export default PlanDuSite;