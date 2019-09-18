import React from 'react'
import Sidebar from "./sidebar/index";
// import Main from "./main/index";
import "./style.sass";
import { BrowserRouter, Route } from 'react-router-dom';
import Color from "../shared/color/index";

export default function index() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="header col-md-12">
                        <h1>UI Style Guide</h1>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row d-flex">
                    <Sidebar/>
                    {/* <Main/> */}
                    <BrowserRouter>
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
                    </BrowserRouter>
                </div>
            </div>
        </>
    )
}
