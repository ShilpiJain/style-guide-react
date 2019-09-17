import React from 'react'
// import Block from "../block/index";
import "./style.css";
import Color from "../../shared/color/index";

const Main = () => {
    return (
        <div className="main-container">
            <div className="container-fluid">
                <h3 className="heading">Color - Swatches</h3>
                <div className="wrapper">
                    <Color/>
                </div>
            </div>
        </div>
    )
}
export default Main;
