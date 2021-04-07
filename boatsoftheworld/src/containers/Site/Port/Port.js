import React, { Component } from 'react';
import TitreH3 from '../../../components/UI/Titres/TitreH3';

class Port extends Component {
    render() {
        return (
            <>
                <TitreH3 bgColor="bg-primary">Les embarcations</TitreH3>
                <div className="container">
                    Page listant les embarcations du port.
                </div>
            </>
        );
    }
}

export default Port;