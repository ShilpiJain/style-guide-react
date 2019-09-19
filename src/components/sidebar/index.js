import React from 'react'
import "./style.sass";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><NavLink to="/">Color</NavLink></li>
                <li><NavLink to="/text">Text Color</NavLink></li>
                <li><NavLink to="/typo">Typography</NavLink></li>
                <li><NavLink to="/logo">Logo</NavLink></li>
                <li><NavLink to="/button">Button</NavLink></li>
                <li><NavLink to="/links">Links</NavLink></li>
                <li><NavLink to="/label">Label</NavLink></li>
                <li><NavLink to="/alert">Alert</NavLink></li>
                <li><NavLink to="/form">Form</NavLink></li>
                <li><NavLink to="/tooltips">Tooltips</NavLink></li>
                <li><NavLink to="/accordions">Accordions</NavLink></li>
            </ul> 
        </div>
    )
}
export default Sidebar;
