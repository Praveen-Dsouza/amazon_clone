import React, { useEffect } from "react";
import "./App.scss";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login";
import { auth } from './firebase';
import { useStateValue } from "./Utils/StateProvider";

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
  {
    path: "login",
    element: <Login />,
  },
]);

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth
      .onAuthStateChanged((authUser) => {
        console.log('auth user', authUser)
        if (authUser) {
          // the user is/was logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        } else {
          // user logged out
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
  }, [])

  return (
    <div>
      <React.StrictMode>
        <RouterProvider router={routes} />
      </React.StrictMode>
    </div>
  );
}

export default App;
