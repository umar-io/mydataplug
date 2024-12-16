import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layouts from "./Layouts.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layouts />}>
        <Route index element={<App />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
