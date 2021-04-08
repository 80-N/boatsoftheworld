import React from "react";
import Button from "../../../..//components/UI/Button/Button";

const boat = (props) => (
    <>
        <div className="card mb-3">
            <h3 className="card-header">{props.name}</h3>
            <div className="text-center">
                <img 
                style={{"height": "200px", "width": "100%", "padding": "5px", "box-shadow": "0 2px 2px 0 rgba(119, 119, 119, 0.2)"}}
                src={props.image} alt={props.name} className="img-fluid h-100" />
            </div>
            <div className="card-body">
                <p className="card-text">{props.description}</p>
            </div>
            <hr/>
            <h6>Embarcation de type <Button typeBtn="btn-info">{props.familly.famillyWording.toUpperCase()}</Button></h6>
            <div>{props.familly.famillyDescription}</div>
            <hr/>
            <h6> 
            {
                props.continents.map(continent => {
                    let colorBtn = "";
                    switch(continent.continentId){
                        case "1" : colorBtn="btn-primary";
                        break;
                        case "2" : colorBtn="btn-success";
                        break;
                        case "3" : colorBtn="btn-danger";
                        break;
                        case "4" : colorBtn="btn-warning";
                        break;
                        case "5" : colorBtn="btn-info";
                        break;
                        default : colorBtn="btn-secondary"
                    }
                    return <Button typeBtn={colorBtn} css="m-1" key={continent.continentId}>{continent.continentWording}</Button>
                })
            }
            </h6>
        </div>
            
    </>
);

export default boat;