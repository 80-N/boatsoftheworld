import React, { Component } from 'react';
import TitreH3 from '../../../components/UI/Titres/TitreH3';
import axios from "axios";
import Bateau from "./Bateau/Bateau";

class Port extends Component {
    state = {
        bateaux : null,
    }

    componentDidMount = () => {
       axios.get(`http://localhost/BOATSSERVER/front/bateaux`)
         .then(response => {
             this.setState({boats:Object.values(response.data)});
         })
    }

    render() {
        return (
            <>
                <TitreH3 bgColor="bg-primary">Les embarcations</TitreH3>
                <div className="container">
                    <div className="row no-gutters">
                        {
                        this.state.boats &&
                        this.state.boats.map(boat => {
                            return (
                                <div className="col-12 col-md-6 col-xl-4" key={boat.id}>
                                    <Bateau {...boat} />
                                </div>
                            )
                        }) 
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default Port;