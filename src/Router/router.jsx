import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
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
        path: "/signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);
export default router;
