import React, { Component } from 'react';
import TitreH3 from '../../../components/UI/Titres/TitreH3';
import axios from "axios";

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
                    {
                       this.state.boats &&
                       this.state.boats.map(boat => {
                           return <h1>{boat.id} - {boat.name}</h1>
                       }) 
                    }
                </div>
            </>
        );
    }
}

export default Port;