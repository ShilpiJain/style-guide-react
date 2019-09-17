import React from 'react'
import Sidebar from "./sidebar/index";
import Main from "./main/index";
import "./style.css";

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
                    <Main/>
                </div>
            </div>
        </>
    )
}
