import React, { useState } from 'react'
import "./color.sass";
import "./style.sass";
import ColorBlock from "./color-block";
import colorList from "./constants";

const Color = () => {
    const [colorName, setColorName] = useState(colorList);
    return (
        <ColorBlock colors={colorName}/>    
    )
}

export default Color;