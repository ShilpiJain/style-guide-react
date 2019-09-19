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
                  {/* <Route exact path='/' component={Color}/> */}
                  {/* <Route path='/typo' component={Typography}/>
                  <Route path='/buttons' component={Buttons}/>
                  <Route path='/form' component={Form}/>
                  <Route path='/icons' component={Icons}/>
                  <Route path='/breadcrumb' component={Breadcrumb}/>
                  <Route path="/placeholder" component={Placeholders}/>
                  <Route path="/sagements" component={Sagements}/>
                  <Route path="/steps" component={Steps}/>
                  <Route path="/menu" component={Menus}/>
                  <Route path="/message" component={Message}/>
                  <Route path="/tables" component={Tabels}/>
                  <Route path="/card" component={Cards}/>
                  <Route path="/comment" component={Comments}/>  
                  <Route path="/feed" component={Feed}/> 
                  <Route path="/statis" component={Statis}/>   
                  <Route path="/progress" component={Progress}/>
                  <Route path="/rating"component={Rating}/>
                  <Route path="/search" component={Search}/>
                  <Route path="/tabs" component={Tabs}/> */}
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
