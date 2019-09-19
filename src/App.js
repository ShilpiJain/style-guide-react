import React from 'react';
import './App.sass';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from "././components/sidebar/index";
import Routing from "./routing";

const App = () => {
  return (
    <>
      <BrowserRouter>
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
            <div className="main-container">
              <div className="container-fluid">
                  <Routing />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
