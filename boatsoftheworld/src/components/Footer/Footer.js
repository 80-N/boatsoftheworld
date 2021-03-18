import React from "react";
import { NavLink } from "react-router-dom";

const footer = (props) => (
   <>
        <footer className="bg-info">
            <div>&#169;  Amarres & Matelots. <i>Tous droits réservés.</i>
                <div>
                        <a href="https://www.facebook.com/etienne.ndour.9">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href="https://twitter.com/EtienneNDOUR2">
                            <i className="fa fa-twitter-square"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/etiennendour-80n/" >
                            <i className="fa fa-linkedin-square"></i>
                        </a>
                        <NavLink className="mentionslegales" to="/mentionslegales">Mentions Légales</NavLink>
                </div>
            </div>
        </footer>
   </>
);

export default footer;