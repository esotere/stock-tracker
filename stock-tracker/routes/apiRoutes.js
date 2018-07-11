const axios = require("axios");
const router = require("express").Router();
const alpha = require('alphavantage')({ key: 'LFMT1TZ5KQGSDKHN' });
const alphaVantageAPI = new AlphaVantageAPI(apiKey, 'compact', true);
const queryUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=LFMT1TZ5KQGSDKHN"
// const apiKey = "LFMT1TZ5KQGSDKHN";
const api = axios.create({
  baseURL: queryUrl
})



router.get("/stocks", (req, res) => {
  api
    .get(queryUrl, alphaVantageAPI, { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;

// https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=LFMT1TZ5KQGSDKHN

// const alpha = require('alphavantage')({ key: 'LFMT1TZ5KQGSDKHN' });

