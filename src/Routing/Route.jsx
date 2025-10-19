import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Error_page from "../pages/Error/Error_page";
import Home from "../pages/Root/Home/Home";
import Apps from "../pages/Apps/Apps";
import AppsDetails from "../pages/Apps/AppsDetails";
import Installations from "../pages/Installation/Installations";
import DetailsApp from "../pages/Apps/DetailsApp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("/home_data.json"),
        Component: Home,
      },
      {
        path: "apps",
        loader: () => fetch("/data.json"),
        Component: Apps,
      },
      {
        path: "appsDetails/:id",
        loader: () => fetch("/home_data.json"),
        Component: AppsDetails,
      },
      {
        path: "detailsApp/:id",
        loader: () => fetch("/data.json"),
        Component: DetailsApp,
      },
      {
        path: "installation",
        Component: Installations,
      },

      {
        path: "*",
        Component: Error_page,
      },
    ],
  },
]);
