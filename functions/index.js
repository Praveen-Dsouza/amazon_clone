const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

/* App Config */
const app = express();

/* Middlewares */
app.use(cors());
app.use(express.json());

/* API routes */
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("total payments", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, /* subunits of the currency */
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

/* App listen */
exports.api = functions.https.onRequest(app);
