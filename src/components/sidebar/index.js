import React from 'react'
import "./style.sass";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                {
                    navigation.map( (navigate, i) =>{
                        return(
                            <li><NavLink to={navigate.link}>{navigate.name}</NavLink></li>
                        )
                    })
                }
            </ul> 
        </div>
    )
}
const navigation = [
    {
        link : "/",
        name : "Color"
    },
    {
        link : "/typo",
        name : "Typography"
    },
    {
        link : "/buttons",
        name : "Buttons"
    },
    {
        link : "/form",
        name : "Form"
    },
    {
        link : "/icons",
        name : "Icons"
    },
    {
        link : "/breadcrumb",
        name : "Breadcrumb"
    },
    {
        link : "/placeholder",
        name : "Placeholders"
    },
    {
        link : "/sagements",
        name : "Sagements"
    },
    {
        link : "/steps",
        name : "Steps"
    },
    {
        link : "/menu",
        name : "Menus"
    },
    {
        link : "/message",
        name : "Message"
    },
    {
        link : "/tables",
        name : "Tabels"
    },
    {
        link : "/comment",
        name : "Comments"
    },
    {
        link : "/feed",
        name : "Feed"
    },
    {
        link : "/statis",
        name : "Statis"
    },
    {
        link : "/progress",
        name : "Progress"
    },
    {
        link : "/rating",
        name : "Rating"
    },
    {
        link : "/search",
        name : "Search"
    },
    {
        link : "/tabs",
        name : "Tabs"
    },
    {
        link : "/card",
        name : "Cards"
    },
]
export default Sidebar;
