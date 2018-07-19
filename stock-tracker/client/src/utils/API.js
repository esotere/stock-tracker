import axios from "axios";
// import router from "react"




// The getStock method retrieves stock from the server
// It accepts a "query" or term to search the stock api for
export default {
  RandomStock: function(query) {
    return axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=LFMT1TZ5KQGSDKHN`, { params: { q: query } });
  },
  getStock: function(query) {
    return axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=LFMT1TZ5KQGSDKHN`, { params: { q: query } });
  },
  // Deletes the stock with the given id
  deleteStock: function(id) {
    return axios.delete("/api/stocks/" + id);
  },
  // Saves a stock to the database
  saveStock: function(stockData) {
    return axios.post("/api/stocks", stockData);
  }
};



// export default {

//   loadRandomStock: function (){
//  router.get("/", (req, res) => {
//   return axios
//     .get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=LFMT1TZ5KQGSDKHN`, { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });
//   },

//   getStock: function (){
//  router.get("/stocks", (req, res) => {
//  return axios
//     .get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=LFMT1TZ5KQGSDKHN`, { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });
// }

// // module.exports = router;

// }





// const username = "5ea1efe25726d96bd3301b88a9b1438d";
// const password = "9c91398114882d5df13a2469e7b9864f";
// const auth = "Basic " + new Buffer(username + ':' + password).toString('base64');

//   export default {
//     getRandomStock: function(query) {
//       return axios.get("https://api.intrinio.com/companies?ticker=AAPL",  {headers: { "Authorization": auth }}, { params: { q: query } });
//     }  
// };
