import React from "react";
import TitreH3 from "../UI/Titres/TitreH3";
import bandeau from "../../assets/images/bandeau.png";

const error = (props) => (
   <>
   <div>
   <div className="tocover">
   
       <div className="superposition">
           <div className="bulle"><a href="/" alt="accroche">...</a></div>
           <div className="bulle"><a href="/" alt="accroche">...</a></div>
           <div className="bulle"><a href="/" alt="accroche">...</a></div>
           <div className="bulle"><a href="/" alt="accroche">...</a></div>
           <div className="bulle"><a href="/" alt="accroche">...</a></div>
       </div>
       <img src={bandeau} alt="bandeau" className="img-fluid" />
       </div>
        <TitreH3 bgColor="bg-danger" >Erreur {props.type}</TitreH3>
        {props.children}
        </div>
   </>
);

export default error;