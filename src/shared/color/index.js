import React, { useState } from 'react'
import "./color.sass";
import "./style.sass";
import ColorBlock from "./color-block";
import colorList from "./constants";

const Color = () => {
    const [colorName] = useState(colorList);
    return (
        <>
            <h3 className="heading">Color - <span>Swatches</span></h3>
            <p>Color Swatches used in Cars24 site.</p>
            <ColorBlock colors={colorName}/>  
        </>  
    )
}

export default Color;