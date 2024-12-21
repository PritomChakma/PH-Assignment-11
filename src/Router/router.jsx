import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import AddVolunteer from "../Page/AddVolunteer";
import AllVolunteer from "../Page/AllVouleenter";
import Home from "../Page/Home";
import MyPost from "../Page/MyPost";
import Registration from "../Page/Registration";
import SignIn from "../Page/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allVolunteer",
        element: <AllVolunteer></AllVolunteer>,
      },
      {
        path: "/addVolunteer",
        element: <AddVolunteer></AddVolunteer>,
      },
      {
        path: "/myPost",
        element: <MyPost></MyPost>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);
export default router;
