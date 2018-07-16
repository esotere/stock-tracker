const axios = require("axios");
const router = require("express").Router();


// const iex = new IEXClient(fetch)
// iex.stockCompany('AAPL')
//   .then(quote => console.log(quote))

// const api = axios.create({
//   baseURL: "https://api.iextrading.com/1.0",
//   IEXClient: "fetch",
//   iex: {
//     stockCompany:'AAPL'
//   }
// })


const iex = {
  IEXClient: "fetch"
}



const api = axios.create({
  baseURL: "https://api.iextrading.com/1.0",
  IEXClient: "fetch",
  iex: () => {
    iex.stockCompany('AAPL')
  .then(quote => console.log(quote))
  
  }
})


router.get("/", (req, res) => {
    axios
      .get(api, { params: req.query })
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