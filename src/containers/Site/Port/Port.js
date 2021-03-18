import React, { Component } from 'react';
import TitreH3 from "../../../components/UI/Titres/TitreH3";
import axios from "axios";
import Bateau from "./Bateau/Bateau";
import Button from "../../../components/UI/Button/Button";

class Port extends Component {
    state = {
        bateaux : null,
        filtreType : null,
        filtreContinent : null,
        listTypes : null,
        listContinents : null
    }

    loadData = () => {
        const type = this.state.filtreType ? this.state.filtreType : "-1";
        const continent = this.state.filtreContinent ? this.state.filtreContinent : "-1";
        axios.get(`http://localhost/BOATSSERVER/front/bateaux/${type}/${continent}`)
          .then(reponse => {
            this.setState({bateaux:Object.values(reponse.data)});
        })
    }

    componentDidMount = () => {
        document.title = "Amarres & Matelots- Embarcations";
        this.loadData();
        axios.get(`http://localhost/BOATSSERVER/front/continents`)
          .then(reponse => {
            this.setState({listContinents:Object.values(reponse.data)});
            })

        axios.get(`http://localhost/BOATSSERVER/front/types`)
          .then(reponse => {
            this.setState({listTypes:Object.values(reponse.data)});
            })
    }

    componentDidUpdate = (oldProps,oldState) => {
        if (oldState.filtreType !== this.state.filtreType || oldState.filtreContinent !== this.state.filtreContinent)
        this.loadData();
    }

    handleSelectionType = (idType) => {
        if(idType === "-1") this.handleResetFiltreType()
        else this.setState({filtreType : idType});
    }

    handleSelectionContinent = (idContinent) => {
        if(idContinent === "-1") this.handleResetFiltreContinent()
        else this.setState({filtreContinent : idContinent});
    }

    handleResetFiltreType = () => {
        this.setState({filtreType:null})
    }
    handleResetFiltreContinent = () => {
        this.setState({filtreContinent:null})
    }

    render() {

        let typeNameFilter="";
        if(this.state.filtreType){
            const caseNumFiltreType = this.state.listTypes.findIndex(familly => {
                return familly.type_id === this.state.filtreType;
            })
            typeNameFilter = this.state.listTypes[caseNumFiltreType].type_wording;
        }

        let continentNameFilter="";
        if(this.state.filtreContinent){
            const caseNumFiltreContinent = this.state.listContinents.findIndex(continent => {
                return continent.continent_id === this.state.filtreContinent;
            })
            continentNameFilter = this.state.listContinents[caseNumFiltreContinent].continent_wording;
        }

        return (
            <>
                <TitreH3 bgColor="bg-primary">Embarcations du monde</TitreH3>
                <div className="container">
                    <span><i>Filtrer par : </i></span>
                    <select onChange={(event) => this.handleSelectionType(event.target.value)}>
                        <option className="filt" value="-1" selected={this.state.filtreType===null && "selected"}>Types d'embarcation</option>
                        {
                            this.state.listTypes && this.state.listTypes.map(familly => {
                                return <option key={familly.type_id} value={familly.type_id}
                                selected={this.state.filtreType === familly.type_id && "selected"}
                                >{familly.type_wording}</option>
                            })
                        }
                    </select>
                    <select onChange={(event) => this.handleSelectionContinent(event.target.value)}>
                        <option className="filt" value="-1" selected={this.state.filtreContinent===null && "selected"}>Continents</option>
                        {
                            this.state.listContinents && this.state.listContinents.map(continent => {
                                return <option key={continent.idContinent} value={continent.continent_id}
                                selected={this.state.filtreContinent === continent.continent_id && "selected"}
                                >{continent.continent_wording}</option>
                            })
                        }
                    </select>

                    {
                    this.state.filtreType &&
                    <Button 
                        typeBtn="btn btn-outline-info"
                        clic = {this.handleResetFiltreType}
                        
                        >
                        {typeNameFilter} &nbsp;
                        
                    </Button>
                }
                {
                    this.state.filtreContinent &&
                    <Button 
                        typeBtn="btn btn-outline-info"
                        clic = {this.handleResetFiltreContinent}
                        >
                        {continentNameFilter} &nbsp;
                        
                    </Button>
                }
                </div>
                    <div className="b-container-fluid">
                            <div className="row no gutters">
                                {
                                    this.state.bateaux &&
                                    this.state.bateaux.map(bateau => {
                                        return (
                                            <div className="col-12 col-md-6 col-xl-4" key={bateau.id}>
                                                <Bateau {...bateau} 
                                                filtreType = {this.handleSelectionType}
                                                filtreContinent = {this.handleSelectionContinent} />
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