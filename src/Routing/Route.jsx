import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Error_page from "../pages/Error/Error_page";
import Home from "../pages/Root/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: Error_page,
    children: [
      {
        index: true,
        loader: () => fetch("/home_data.json"),
        path: "/",
        Component: Home,
      },
    ],
  },
]);
