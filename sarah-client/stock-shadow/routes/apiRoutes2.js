const axios = require("axios");
const router = require("express").Router();


const username = "5ea1efe25726d96bd3301b88a9b1438d";
const password = "9c91398114882d5df13a2469e7b9864f";
const auth = "Basic " + new Buffer(username + ':' + password).toString('base64');

// let params = {
//   // api params go here
//   identifier: input,
//   item: "",
//   start_date: "",
//   end_date: "",

// };

// const baseURL = "https://api.intrinio.com/companies?ticker=AAPL";

router.get("/stocks", (req, res) => {
  axios
    .get(`https://api.intrinio.com/companies?ticker=${AAPL}`,  {headers: { "Authorization": auth }}, { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
