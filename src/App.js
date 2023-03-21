import React, { useEffect } from "react";
import "./App.scss";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login";
import { auth } from './firebase';
import { useStateValue } from "./Utils/StateProvider";
import Footer from "./Components/Footer";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

// Defination of routes
const routes = createBrowserRouter([
  {
    path: "/",
    element: [<Navbar />, <Home />, <Footer />],
  },
  {
    path: "checkout",
    element: [<Navbar />, <Checkout />, <Footer />],
  },
  {
    path: 'payment',
    element: [<Navbar />, <Elements stripe={promise}><Payment /></Elements> , <Footer />],
  },
  {
    path: "orders",
    element: [<Navbar />, 'Orders', <Footer />],
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
