import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { ArticlePage } from "../pages/ArticlePage/ArticlePage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
      errorElement:<ErrorPage />
    },
    {
      path: "/article/:title/:publishedAt",
      element: <ArticlePage/>,
      errorElement:<ErrorPage />
    },
]);