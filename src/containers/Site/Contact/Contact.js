import React, { Component } from 'react';
import axios from "axios";
import TitreH3 from "../../../components/UI/Titres/TitreH3";
import Formulaire from "./Formulaire/Formulaire";

class Contact extends Component {
    componentDidMount = () => {
        document.title = "Amarres & Matelots- Contact";
    }

    handleSendMail = (message) => {
        axios.post("http://localhost/BOATSSERVER/front/sendMessage",message)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (

          <>
         <TitreH3 bgColor="bg-primary">Contact</TitreH3>
         <div className="container">
             <h6>Adresse : </h6>
             xxxxxxxxxxxxxx
             <h6> Téléphone : </h6>
             00 00 00 00 00 
             <h6> Préférez-vous nous écrire ?</h6>
             <Formulaire sendMail = {this.handleSendMail}/>
         </div>
          </>
        );
    }
}

export default Contact;