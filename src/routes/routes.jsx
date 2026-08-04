
import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Project from "../Pages/Project/Project";
import Root from "../Layout/Root";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                 loader: async () => {
    const res = await fetch("./estate.json");
    return res.json();
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
            }
        ]
    }
])

export default routes;