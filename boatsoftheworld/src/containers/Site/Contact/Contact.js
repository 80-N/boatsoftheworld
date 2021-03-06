import React, { Component } from 'react';
import axios from "axios";
import TitreH3 from "../../../components/UI/Titres/TitreH3";
import island from "../../../assets/images/island.png";
import buoy from "../../../assets/images/buoy.png";
import bluewaves from "../../../assets/images/bluewaves.png";

class Contact extends Component {
    componentDidMount = () => {
        document.title = "Amarres & Matelots - Contact";
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
                    <adress><h6>Adresse : </h6><h5>9, rue de Vern - Rennes(35). FRANCE</h5></adress>
                    <h6>Téléphone : </h6><h5>06 80 87 61 80</h5>
                <hr/>
                    <div className="container-fluid">
                        <h6>Préférez-vous nous écrire ?</h6>
                        <a href="mailto:etienndour@gmail.com">etienndour@gmail.com</a>
                    </div>
                
                <div className="bandeauMer">
                   <img src={island} alt="bandeau" className="img-fluid" />
                    <div><img src={buoy} alt="bouée" className="buoy" /></div>
                    <div><img src={bluewaves} alt="vagues" className="bluewaves" /></div>
                </div>
                </div>   
            </>
        );
    }
}

export default Contact;