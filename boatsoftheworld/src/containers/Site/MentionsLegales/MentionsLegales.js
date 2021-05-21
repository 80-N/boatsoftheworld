import React, { Component } from 'react';
import TitreH3 from "../../../components/UI/Titres/TitreH3";

class MentionsLegales extends Component {
    componentDidMount = () => {
        document.title = "Amarres & Matelots - Mentions légales";
    }

    render() {
        return (
            <>
                <TitreH3 bgColor="bg-primary">Mentions légales</TitreH3>
                <div className="container">
                    <h6>Ce site est créé : <br/>
                        par Etienne NDOUR<br/>
                        email : <a href="mailto:etienndour@gmail.com"> etienndour@gmail.com</a><br/>
                        tél : 06 80 87 61 80<br/>
                        Adresse postale : 9, rue de Vern, 35200 - Rennes.
                    </h6>
                    <hr/>
                    <h6>
                        <h5>Nom du site web :</h5>Amarres et Matelots<br/><br/>
                        <h5>Adresse : </h5> <a href="https://www.amarresetmatelots.fr">https://www.amarresetmatelots.fr</a><br/><br/>
                        <h5>Propriétaire : </h5> Etienne NDOUR<br/><br/>
                        <h5>Responsable de publication : </h5> Etienne NDOUR<br/><br/>
                        <h5>Conception et réalisation : </h5> Etienne NDOUR<br/><br/>
                        <h5>Animation : </h5> Etienne NDOUR<br/><br/>
                        <h5>Hébergement : </h5> OVH<br/><br/>
                        <h5>Conditions d'utilisation : </h5> L’utilisation du présent site implique l’acceptation pleine et entière
                        des conditions générales d’utilisation décrites ci-après.    
                        Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment.<br/><br/>
                        <h5>Informations : </h5> Les informations et documents du site sont présentés à titre indicatif, 
                        n’ont pas de caractère exhaustif, et ne peuvent engager la responsabilité du propriétaire du site.<br/>
                        Le propriétaire du site ne peut être tenu responsable des dommages directs et indirects consécutifs
                        à l’accès au site.<br/><br/>
                        <h5>Propriété intellectuelle : </h5> Sauf mention contraire, tous les éléments accessibles sur le site
                        (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) restent la propriété exclusive
                        de leurs auteurs,
                        en ce qui concerne les droits de propriété intellectuelle ou les droits d’usage. 
                        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site,
                        quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l’auteur.
                        Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient est considérée
                        comme constitutive d’une contrefaçon et poursuivie.
                        Les marques et logos reproduits sur le site sont déposés par les sociétés qui en sont propriétaires.<br/><br/>
                        <h5>Liens sortants : </h5> Le propriétaire du site décline toute responsabilité
                        et n’est pas engagé par le référencement via des liens hypertextes, de ressources tierces
                        présentes sur le réseau Internet, tant en ce qui concerne leur contenu que leur pertinence.<br/><br/>
                        <h5>Liens entrants : </h5> Le propriétaire du site autorise les liens hypertextes
                        vers l’une des pages de ce site, à condition que ceux-ci ouvrent une nouvelle fenêtre
                        et soient présentés de manière non équivoque afin d’éviter :<br/>
                        - tout risque de confusion entre le site citant et le propriétaire du site<br/>
                        - ainsi que toute présentation tendancieuse, ou contraire aux lois en vigueur.<br/>
                        Le propriétaire du site se réserve le droit de demander la suppression d’un lien s’il estime
                        que le site source ne respecte pas les règles ainsi définies.<br/><br/>
                        <h5>Confidentialité : </h5> Tout utilisateur dispose d’un droit d’accès, de rectification
                        et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite
                        et signée, accompagnée d’une preuve d’identité. <br/>
                        Le site ne recueille pas d’informations personnelles, et n’est pas assujetti à déclaration
                        à la CNIL.<br/><br/>
                        <h5>Crédits photos : </h5> Photos sous licence CREATIVE COMMONS<br/><br/>
                    </h6>
                
                </div>   
            </>
        );
    }
}

export default MentionsLegales;