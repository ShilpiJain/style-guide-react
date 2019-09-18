import React from 'react'
import "./style.sass";
import Color from "../../shared/color/index";
// import { BrowserRouter, Route } from 'react-router-dom';

const Main = () => {
    return (
            <div className="main-container">
                <div className="container-fluid">
                    <h3 className="heading">Color - Swatches</h3>
                    <div className="wrapper">
                        <Route exact path='/' component={Color}/>
                        {/* <Route path='/about' component={About}/>
                        <Route path='/contact' component={Contact}/> */}
                        {/* <Color/> */}
                    </div>
                </div>
            </div>
    )
}
export default Main;
