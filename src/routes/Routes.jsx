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
import Support from "../pages/Support";
import LeaderBoard from "../pages/LeaderBoard/LeaderBoard";
import Turnament from "../pages/Turnament/Turnament";
import Faq from "../pages/Faq/Faq";


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
 element:<About></About>
},
{
  path:"contact",
  element:<Contact></Contact>
},
{
  path:"support",
 element:<Support></Support>
},
{
  path:"/leaderboard",
 element:<PrivateRoutes><LeaderBoard></LeaderBoard></PrivateRoutes>
},
{
  path:"/tuna",
  element:<PrivateRoutes><Turnament></Turnament></PrivateRoutes>
},
{
  path:"/faq",
  Component:Faq
}

    ]
  },
]);