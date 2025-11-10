import { createBrowserRouter } from "react-router";
import App from "../App";
import PublicLayout from "../Layouts/PublicLayout";
import Home from "../Pages/Home/Home";

import MyActivities from "../Pages/MyActivities/MyActivities";
import Challenges from "../Pages/Challenges/Challenges";

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
        }]
}])

export default Routes;