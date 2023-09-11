import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Display from "./pages/Display.jsx";
import DisplayDetail from "./pages/DisplayDetail.jsx";
import DisplayComplete from "./pages/DisplayComplete.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: 'display',
    element: <Display />
  },
  {
    path: 'displayDetail',
    element: <DisplayDetail />
  },
  {
    path: 'displayComp',
    element: <DisplayComplete />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
