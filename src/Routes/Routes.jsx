import { createBrowserRouter } from "react-router";
import App from "../App";
import PublicLayout from "../Layouts/PublicLayout";
import Home from "../Pages/Home/Home";
import Challenges from "../Pages/Home/Challenges/Challenges";
import MyActivities from "../Pages/MyActivities/MyActivities";

const Routes=createBrowserRouter([{
        path:'/',
        Component: PublicLayout,
        children: [{
            index:true,
            Component: Home
        },{
            path: '/challenges',
            Component: Challenges
        },{
            path: 'myactivities',
            Component: MyActivities
        }]
}])

export default Routes;