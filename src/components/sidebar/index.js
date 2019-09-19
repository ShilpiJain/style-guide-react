import React from 'react'
import "./style.sass";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><NavLink to="/">Color</NavLink></li>
                <li><NavLink to="/typo">Typography</NavLink></li>
                <li><NavLink to="/buttons">Buttons</NavLink></li>
                <li><NavLink to="/form">Form</NavLink></li>
                <li><NavLink to="/icons">Icons</NavLink></li>
                <li><NavLink to="/breadcrumb">Breadcrumbs</NavLink></li>
                <li><NavLink to="/placeholder">Placeholders</NavLink></li>
                <li><NavLink to="/sagements">Sagements</NavLink></li>
                <li><NavLink to="/steps">Steps</NavLink></li>
                <li><NavLink to="/menu">Menus</NavLink></li>
                <li><NavLink to="/message">Message</NavLink></li>
                <li><NavLink to="/tables">Tabels</NavLink></li>
                <li><NavLink to="/card">Cards</NavLink></li>
                <li><NavLink to="/comment">Comments</NavLink></li>   
                <li><NavLink to="/feed">Feed</NavLink></li>   
                <li><NavLink to="/statis">Statis</NavLink></li>   
                <li><NavLink to="/progress">Progress Indicators</NavLink></li>  
                <li><NavLink to="/rating">Rating</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
                <li><NavLink to="/tabs">Tabs</NavLink></li>
            </ul> 
        </div>
    )
}
export default Sidebar;
