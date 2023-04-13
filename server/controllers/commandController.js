// const express = require("express");
// const { model } = require("mongoose");
// const stripe = require("stripe");
// const dotenv = require("dotenv")(process.env.STRIPE_SECRET_KEY);

// const payment = async (req, res, next) => {
//   const { amount } = req.body;
//   try {
//     const paymentIntent = await stripe.paymentIntent
//       .create({
//         amount,
//         currency: "USD",
//       })
//       .then(() => {
//         res.send(paymentIntent.client_secret);
//       })
//       .catch((err) => {
//         throw new Error(err);
//       });
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports = payment;
