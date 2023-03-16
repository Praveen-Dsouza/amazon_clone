import React from "react";
import "./App.scss";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";

// Defination of routes
const routes = createBrowserRouter([
  // {
  //   element: <Navbar />,
  //   children: [
  //   ]
  // },
  {
    path: "/",
    element: [<Navbar />, <Home />],
  },
  {
    path: "checkout",
    element: [<Navbar />, <Checkout />],
  },
]);

function App() {
  return (
    <div>
      <React.StrictMode>
        <RouterProvider router={routes} />
      </React.StrictMode>
    </div>
  );
}

export default App;
