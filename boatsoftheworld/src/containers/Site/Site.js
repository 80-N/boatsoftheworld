import React, { Component } from 'react';
import NavBar from "../../components/UI/NavBar/NavBar";
import { Switch, Route } from "react-router-dom";
import Accueil from "./Accueil/Accueil";
import Port from "./Port/Port";
import Error from "../../components/Error/Error";
import Footer from "../../components/Footer/Footer";
import Contact from "./Contact/Contact";

class Site extends Component {
    render() {
        return (
            // code ici
            <>
              <div className="site">
                    <NavBar />
                    <Switch>
                        <Route path="/" exact render={() => <Accueil />} />
                        <Route path="/bateaux" exact render={() => <Port />} />
                        <Route path="/contact" exact render={() => <Contact />} />
                        <Route render={() => <Error type="404">Oooops ... Cette page est peut-être en chantier :( ...</Error>} />
                    </Switch>
                    <div className="minSite"></div>
             </div>
                    <Footer />
            </>
        );
    }
}

export default Site;

