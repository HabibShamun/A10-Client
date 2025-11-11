import { createBrowserRouter } from "react-router";
import App from "../App";
import PublicLayout from "../Layouts/PublicLayout";
import Home from "../Pages/Home/Home";

import MyActivities from "../Pages/MyActivities/MyActivities";
import Challenges from "../Pages/Challenges/Challenges";
import Login from "../Pages/Login/Login";
import Regsiter from "../Pages/Register/Regsiter";

const Routes=createBrowserRouter([{
        path:'/',
        Component: PublicLayout,
        children: [{
            index:true,
            Component: Home,

        },{
            path: '/challenges',
            Component: Challenges
        },{
            path: 'myactivities',
            Component: MyActivities
        },
        {
            path: '/login',
            Component: Login
        },
        {
            path:'/register',
            Component: Regsiter
        }
    ]
}
])

export default Routes;