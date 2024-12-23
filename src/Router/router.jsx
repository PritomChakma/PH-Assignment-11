import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import UpdateData from "../Components/UpdateData";
import VoulenteerDetails from "../Components/VoulenteerDetails";
import MainLayout from "../Layout/MainLayout";
import AddVolunteer from "../Page/AddVolunteer";
import AllVolunteer from "../Page/AllVouleenter";
import Home from "../Page/Home";
import MyPost from "../Page/MyPost";
import MyRequest from "../Page/MyRequest";
import Registration from "../Page/Registration";
import SignIn from "../Page/SignIn";
import VouleenterRequest from "../Page/VouleenterRequest";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddVolunteer></AddVolunteer>
          </PrivateRoute>
        ),
      },
      {
        path: "/myPost",
        element: (
          <PrivateRoute>
            <MyPost></MyPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/myRequest",
        element: (
          <PrivateRoute>
            <MyRequest></MyRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/vouleenteerRequest",
        element: (
          <PrivateRoute>
            <VouleenterRequest></VouleenterRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/VoulenteerDetails/:id",
        element: (
          <PrivateRoute>
            <VoulenteerDetails></VoulenteerDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateData/:id",
        element: (
          <PrivateRoute>
            <UpdateData></UpdateData>
          </PrivateRoute>
        ),
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
