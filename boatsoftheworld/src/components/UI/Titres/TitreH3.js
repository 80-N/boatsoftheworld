import React from "react";

const titreH3 = (props) => {
    let backgroundColor = props.bgColor ? props.bgColor : "bg-info";
    let monCss = `p-2 text-white text-center ${backgroundColor}`;
    return <h3 className={monCss}>{props.children}</h3>
};

export default titreH3;