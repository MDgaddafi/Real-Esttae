import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error404 from "../pages/Shared/Error404/Error404";
import AllProperties from "../pages/AllProperties/AllProperties";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import All from "../pages/AllProperties/All";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '*',
        element: <Error404></Error404>
      },
      {
        path: '/all-properties',
        element: <PrivateRoute><AllProperties></AllProperties></PrivateRoute>
      },
      {
        path: '/all',
        element: <PrivateRoute><All></All></PrivateRoute>
      },
    ]
  },
]);

