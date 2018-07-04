const axios = require("axios");
const router = require("express").Router();

router.get("/stocks", (req, res) => {
  axios
    .get("https://www.alphavantage.co/query?", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;