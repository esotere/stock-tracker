const router = require("express").Router();
const stocksController = require("../../controllers/stocksController");
const axios = require('axios');
// Matches with "/api/"
router.route("/")
  .get(stocksController.findAll);

// Matches with "/api/stocks"
router.route("/stocks")
  .get(stocksController.findAll)
  .post(stocksController.create);

// Matches with "/api/stocks/:id"
// router.route("/:id")
//   .get(stocksController.findById)
//   .put(stocksController.update)
//   .delete(stocksController.remove);

//   const username = "5ea1efe25726d96bd3301b88a9b1438d";
// const password = "f3779b9eb9fd52dd1b4ed24630feb9b9";
// const auth = "Basic " + new Buffer(username + ':' + password).toString('base64');


// router.route('/intrinoattempt')
//   .get((req, res) => {
//     axios.get(`https://api.iextrading.com/1.0`,  {headers: { "Authorization": auth }}, { params: { q: 'aapl' } })
//       .then(data => res.json(data))
//       .catch(err => res.json({err: err.message}))
//   })

module.exports = router;