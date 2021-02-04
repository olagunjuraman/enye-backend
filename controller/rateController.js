import axios from "axios";
import asyncHandler from "express-async-handler";

export const getRate = asyncHandler(async (req, res) => {
  let { base, currency } = req.query;
  const { data } = await axios.get(`https://api.exchangeratesapi.io/latest`, {
    params: req.query,
  });

  currency = currency.split(",");

  const rates = {};
  for (let i = 0; i < currency.length; i++) {
    rates[currency[i]] = data.rates[currency[i]];
  }

  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const response = {
    results: {
      base,
      date,
      rates,
    },
  };

  res.json(response);
});
