const axios = require("axios");
const router2 = require("express").Router();
const IntrinioRealtime = require('intrinio-realtime')
const api = axios.create({
  baseURL: "https://api.intrinio.com/companies?ticker=AAPL"
})



const username = "5ea1efe25726d96bd3301b88a9b1438d";
const password = "9c91398114882d5df13a2469e7b9864f";
const auth = "Basic " + new Buffer(username + ':' + password).toString('base64');
const queryUrl2 = "https://api.intrinio.com/companies?ticker=AAPL";
// let params = {
//   // api params go here
//   identifier: input,
//   item: "",
//   start_date: "",
//   end_date: "",

// };

// const baseURL = "https://api.intrinio.com/companies?ticker=AAPL";

router2.get("/stocks", (req, res) => {
  api
    .get(queryUrl2,  {headers: { "Authorization": auth }}, { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router2;
