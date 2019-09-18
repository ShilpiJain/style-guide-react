import React from 'react';
import './App.sass';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from "././components/sidebar/index";
import Color from "./shared/color/index";
import Typography from "./shared/typography/index";

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
                <div className="wrapper">
                  <Switch>
                    <Route exact path='/' component={Color}/>
                    <Route path='/typo' component={Typography}/>
                    {/* <Route path='/contact' component={Contact}/> */}
                    {/* <Color/> */}
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
