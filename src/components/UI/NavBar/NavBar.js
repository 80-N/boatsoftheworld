import React from "react";
import logo from "../../../assets/images/logo-A&M2.png";
import { NavLink } from "react-router-dom";


const navbar = (props) => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div><a className="navbar-brand" href="/">
                <img src={logo} alt="logo de Nav'Bar" width='100%' className="img-fluid"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                
                    <li className="nav-item">
                        <NavLink to="/" exact className="nav-link">Accueil</NavLink>
                        <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/bateaux" exact className="nav-link">Embarcations</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact className="nav-link">Contact</NavLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
    
    </>
);

export default navbar;