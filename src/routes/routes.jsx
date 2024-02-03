import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
      errorElement:<ErrorPage />
    },
]);