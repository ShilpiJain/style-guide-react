import React from 'react'
import { Route , Switch} from 'react-router-dom';
import Color from "../shared/color/index";
import Typography from "../shared/typography/index";
import Breadcrumb from "../shared/breadcrumb";
import Buttons from "../shared/button";
import Form from "../shared/form";
import Icons from "../shared/icons";
import Placeholders from "../shared/placeholder";
import Sagements from "../shared/sagements";
import Steps from "../shared/steps";
import Menus from "../shared/menu";
import Message from "../shared/message";
import Tabels from "../shared/tables";
import Cards from "../shared/card";
import Comments from "../shared/comment";
import Feed from "../shared/feed";
import Statis from "../shared/statis";
import Progress from "../shared/progress";
import Rating from "../shared/rating";
import Search from "../shared/search";
import Tabs from "../shared/tabs";

const Routing = () => {
    return (
        <Switch>
            {
                routes.map((route, i) => {
                    return (
                        <Route key={i} path={route.path} exact={route.exact} component={route.component}/>
                    )
                })
            }
        </Switch>
    )
}

const routes = [
    {
        path : "/",
        exact : true,
        component : Color,
    },
    {
        path : "/typo",
        exact : false,
        component : Typography,
    },
    {
        path : "/buttons",
        exact : false,
        component : Buttons,
    },
    {
        path : "/form",
        exact : false,
        component : Form,
    },
    {
        path : "/icons",
        exact : false,
        component : Icons,
    },
    {
        path : "/breadcrumb",
        exact : false,
        component : Breadcrumb,
    },
    {
        path : "/placeholder",
        exact : false,
        component : Placeholders,
    },
    {
        path : "/sagements",
        exact : false,
        component : Sagements,
    },
    {
        path : "/steps",
        exact : false,
        component : Steps,
    },
    {
        path : "/menu",
        exact : false,
        component : Menus,
    },
    {
        path : "/message",
        exact : false,
        component : Message,
    },
    {
        path : "/tables",
        exact : false,
        component : Tabels,
    },
    {
        path : "/comment",
        exact : false,
        component : Comments,
    },
    {
        path : "/feed",
        exact : false,
        component : Feed,
    },
    {
        path : "/statis",
        exact : false,
        component : Statis,
    },
    {
        path : "/progress",
        exact : false,
        component : Progress,
    },
    {
        path : "/rating",
        exact : false,
        component : Rating,
    },
    {
        path : "/search",
        exact : false,
        component : Search,
    },
    {
        path : "/tabs",
        exact : false,
        component : Tabs,
    },
    {
        path : "/card",
        exact : false,
        component : Cards,
    },
] 
export default Routing;