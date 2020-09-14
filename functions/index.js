const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51HRCFfJ4xPz4aD2gb9k4W0KcG4cZJyBJqR0pfdCfY0sbV1I2JO9IOIL1n45rKVBsZP8D5YAz1qtJP9iqphfJJcTO00ogcI53YI"
);
/* API */

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("Hello World!"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request recieved for Gotcha : ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen
exports.api = functions.https.onRequest(app);
