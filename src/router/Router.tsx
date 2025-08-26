import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import AboutUs from "../pages/AboutUs";
import UserDetails from "../pages/UserDetails";
import CreateUser from "../pages/CreateUser";

export const mainRoute = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/userdetails/:id",
        element: <UserDetails />,
      },
      {
        path: "/createuser",
        element: <CreateUser />,
      },
    ],
  },
]);
