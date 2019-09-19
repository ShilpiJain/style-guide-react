import React, { useState } from 'react'
import "./color.sass";
import "./style.sass";
import ColorBlock from "./color-block";

const Color = () => {
    let colorList = [
        {   
            id: 1,
            name : "orange",
            value : "#ed6c0d", 
        },
        {   
            id: 2,
            name : "black",
            value : "#000", 
        }
    ];
    const [colorName, setColorName] = useState(colorList);
    return (
        <React.Fragment>
            <ColorBlock colors={colorName}/>    
        </React.Fragment>
    )
}

export default Color;