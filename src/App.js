import React from "react";
import "./App.scss";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./Components/Checkout";

// Defination of routes
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

function App() {
  return (
    <div>
      <React.StrictMode>
        <Navbar />
        <RouterProvider router={routes} />
      </React.StrictMode>
    </div>
  );
}

export default App;
