import React from "react";
import TitreH3 from "../UI/Titres/TitreH3";

const error = (props) => (
   <>
        <TitreH3 bgColor="bg-danger" >Erreur {props.type}</TitreH3>
        {props.children}
   </>
);

export default error;