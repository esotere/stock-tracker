const axios = require("axios");
const router = require("express").Router();


router.get("/", (req, res) => {
    axios
      .get("https://api.iextrading.com/1.0", { params: req.query })
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  });
  

router.get("/stocks", (req, res) => {
  axios
    .get("https://api.iextrading.com/1.0", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;