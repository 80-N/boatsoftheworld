import React, { Component } from 'react';
import TitreH3 from '../../../components/UI/Titres/TitreH3';
import axios from "axios";
import Bateau from "./Bateau/Bateau";
import Button from "../../../components/UI/Button/Button";

class Port extends Component {
    componentDidMount = () => {
        document.title = "Amarres & Matelots - Bateaux";
    }
    state = {
        bateaux : null,
        typeFilter : null,
        continentFilter : null,
        familiesList : null,
        continentsList : null
    }

        //Loading and filtering datas on families and continents
    loadData = () => {
        const familly = this.state.typeFilter ? this.state.typeFilter : "-1";
        const continent = this.state.continentFilter ? this.state.continentFilter : "-1";
        axios.get(`http://localhost/BOATSSERVER/front/bateaux/${familly}/${continent}`)
         .then(response => {
             this.setState({boats:Object.values(response.data)});
         })
    }
        //Filtering datas on families and continents
    componentDidMount = () => {
       this.loadData();
       axios.get(`http://localhost/BOATSSERVER/front/familles`)
         .then(response => {
             this.setState({familiesList:Object.values(response.data)});
         })
         axios.get(`http://localhost/BOATSSERVER/front/continents`)
         .then(response => {
             this.setState({continentsList:Object.values(response.data)});
         })
    }

    componentDidUpdate = (oldProps,oldState) => {
        if (oldState.typeFilter !== this.state.typeFilter || oldState.continentFilter !== this.state.continentFilter)
        this.loadData();
    }

    handleFamillySelection = (typeId) => {
        if(typeId === "-1") this.handleResetTypeFilter()
        else this.setState({typeFilter : typeId});
    }

    handleContinentSelection = (continentId) => {
        if(continentId === "-1") this.handleResetContinentFilter();
        else this.setState({continentFilter : continentId});
    }

    handleResetTypeFilter = () => {
        this.setState({typeFilter:null})
    }

    handleResetContinentFilter = () => {
        this.setState({continentFilter:null})
    }

    render() {
        let famillyNameFilter="";
        if(this.state.typeFilter){
            const numCaseTypeFilter = this.state.familiesList.findIndex(familly => {
                return familly.type_id === this.state.typeFilter;
            })
            famillyNameFilter = this.state.familiesList[numCaseTypeFilter].type_wording;
        }
        let continentNameFilter="";
        if(this.state.continentFilter){
            const numCaseContinentFilter = this.state.continentsList.findIndex(continent => {
                return continent.continent_id === this.state.continentFilter;
            })
            continentNameFilter = this.state.continentsList[numCaseContinentFilter].continent_wording;
        }

        return (
            <>
                <TitreH3 bgColor="bg-primary">Les embarcations</TitreH3>
                <div className="container-fluid">
                    <span><i>Filtrer par : </i></span>
                     <select onChange={(event) => this.handleFamillySelection(event.target.value)}>
                        <option value="-1" selected={this.state.typeFilter === null && "selected"}>Familles</option>
                        {
                            this.state.familiesList && this.state.familiesList.map(familly => {
                                return <option 
                                            value={familly.type_id}
                                            selected={this.state.typeFilter === familly.type_id && "selected"}
                                            >{familly.type_wording}
                                        </option>
                            })
                        }
                    </select> 
                    <select onChange={(event) => this.handleContinentSelection(event.target.value)}>
                        <option value="-1" selected={this.state.continentFilter === null && "selected"}>Continents</option>
                        {
                            this.state.continentsList && this.state.continentsList.map(continent => {
                                return <option 
                                            value={continent.continent_id}
                                            selected={this.state.continentFilter === continent.continent_id && "selected"}
                                            >{continent.continent_wording}
                                        </option>
                            })
                        }
                    </select>  


                {
                    this.state.typeFilter && 
                    <Button 
                        typeBtn="btn-info"
                        clic = {this.handleResetTypeFilter}
                        >
                        {famillyNameFilter} &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </Button>
                }
                {
                    this.state.continentFilter && 
                    <Button 
                        typeBtn="btn-info"
                        clic = {this.handleResetContinentFilter}
                        >
                        {continentNameFilter} &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </Button>
                }
                </div>

                <div className="container">
                    <div className="row no-gutters">
                        {
                        this.state.boats &&
                        this.state.boats.map(boat => {
                            return (
                                <div className="col-12 col-md-6 col-xl-4" key={boat.id}>
                                    <Bateau {...boat} 
                                        typeFilter = {this.handleFamillySelection}
                                        continentFilter = {this.handleContinentSelection}   
                                    />
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