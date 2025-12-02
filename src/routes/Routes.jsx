import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Homepage from "../component/homepage/Homepage";
import Games from "../pages/Games";
import Details from "../pages/detailspages/Details";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
import PrivateRoutes from "../privateroutes/Privateroutes";
import Error from "../authentication/error/Error";
import Forgetpassword from "../authentication/forgepassword/Forgetpassword";
import UpdatedProfile from "../authentication/updatedprofile/UpdatedProfile";
import Loading from "../authentication/Loading";
import Contact from "../pages/Contact";
import About from "../pages/About";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Mainlayout,
    errorElement:<Error/>,
    children:[
        {
            index:true,
            path:"",
            Component:Homepage
        },
        {
            path:"/games",
            Component:Games,
            loader:()=>fetch("/games.json"),
            hydrateFallbackElement:<Loading></Loading>
        },
        {
          path:"details/:id",
          element:
            <Details>
            
          </Details>

          
        },
        {
          path:"register",
          Component:Register
          
        },
        {
          path:"login",
          Component:Login
        },
        {
  path: "/forgetpassword",
  element: <PrivateRoutes><Forgetpassword /></PrivateRoutes>,
},
{
  path:"update-profile",
  element:<PrivateRoutes><UpdatedProfile></UpdatedProfile></PrivateRoutes>
},
{
  path:"about",
 element:<PrivateRoutes><About></About></PrivateRoutes>
},
{
  path:"contact",
  Component:<PrivateRoutes><Contact></Contact></PrivateRoutes>
}

    ]
  },
]);