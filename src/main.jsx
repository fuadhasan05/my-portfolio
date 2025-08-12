import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "./components/Home.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import Layouts from "./Layouts/Layouts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts/>,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "project-details/:id",
        element: <ProjectDetails />,
        hydrateFallbackElement: <p>Loading....</p>,
        loader: () => fetch("/projects.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
