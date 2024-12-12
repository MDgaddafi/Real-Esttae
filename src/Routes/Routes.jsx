import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error404 from "../pages/Shared/Error404/Error404";
import AllProperties from "../pages/AllProperties/AllProperties";
import PrivateRoute from "./PrivateRoute";
import PropertyDetails from "../pages/AllProperties/PropertyDetails";
import Dashboard from "../Layout/Dashboard";
import Wishlist from "../pages/Dashboard/Wishlist/Wishlist";
import MakeOfferPage from "../pages/Dashboard/Wishlist/MakeOfferPage";
import BoughtProperties from "../pages/Dashboard/Wishlist/BoughtProperties";
import MyReviewsPage from "../pages/Dashboard/Wishlist/MyReviewsPage";
import ProfilePage from "../pages/Dashboard/Wishlist/ProfilePage";
import ContactPage from "../pages/Dashboard/Wishlist/ContactPage";
import AboutPage from "../pages/Dashboard/Wishlist/AboutPage";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>
      },
      {
        path: "*",
        element: <Error404></Error404>,
      },
      {
        path: "/all-properties",
        element: (
          <PrivateRoute>
            <AllProperties></AllProperties>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5001/properties/${params.id}`),
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
      path: '/dashboard/wishlist',
      element: <Wishlist></Wishlist>
    },
      {
      path: '/dashboard/carts/:id',
      element: <MakeOfferPage></MakeOfferPage>,
    },
    {
      path: "/dashboard/bought-properties",
      element: <BoughtProperties />,
    },
    {
      path: "/dashboard/reviews",
      element: <MyReviewsPage />,
    },
    {
      path: "/dashboard/profile",
      element: <ProfilePage/>,
    },
  ],
  },
]);
