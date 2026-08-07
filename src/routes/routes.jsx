
import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Root from "../Layout/Root";
import ProjectDetails from "../Pages/Project/ProjectDetails";
import Project from '../Pages/Project/Project';
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile/Profile";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader:()=> fetch('./estate.json')
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
             {
                path:'/project',
                element:<Project></Project>
            },
            {
                path:'/projectdetails/:_id',
                element:<PrivateRoute><ProjectDetails></ProjectDetails></PrivateRoute>,
               loader: async () => {
  const res = await fetch("/estate.json");
  return res.json();
}
            },
            {
                path:'/profile',
                element: (
                    <PrivateRoute><Profile></Profile></PrivateRoute>
                )
            }
        ]
    }
])

export default routes;