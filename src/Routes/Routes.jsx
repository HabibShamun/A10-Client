import { createBrowserRouter } from "react-router";
import App from "../App";
import PublicLayout from "../Layouts/PublicLayout";
import Home from "../Pages/Home/Home";

import MyActivities from "../Pages/MyActivities/MyActivities";
import Challenges from "../Pages/Challenges/Challenges";
import Login from "../Pages/Login/Login";
import Regsiter from "../Pages/Register/Regsiter";
import PrivateRoute from "./PrivateRoute";
import ChallengeDetails from "../Pages/ChallengeDetails/ChallengeDetails";

import Profile from "../Pages/Profile/Profile";

import Update from "../Pages/Update/Update";

const Routes=createBrowserRouter(

    [{
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
            element: <PrivateRoute>
                <MyActivities></MyActivities>
            </PrivateRoute>
        },
        {
            path: '/login',
            Component: Login
        },
        {
            path:'/register',
            Component: Regsiter
        }, 
        {
            path:'/challengedetails/:id',
            // loader:({params})=>axios(`/challenges/${params.id}`),
            loader: ({params})=>fetch(`http://localhost:5000/challenges/${params.id}`),
            element: <PrivateRoute> <ChallengeDetails></ChallengeDetails> </PrivateRoute>
        },
        {
            path: '/profile',
            element: <PrivateRoute> 
                <Profile></Profile>
            </PrivateRoute>
        },{
            path: '/update',
            element: <PrivateRoute>
                <Update></Update>
            </PrivateRoute>
        }
    ]
}
])

export default Routes;