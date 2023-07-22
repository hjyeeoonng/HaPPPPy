import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import InputDone from "./pages/InputDone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/done",
    element: <InputDone />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
