import axios from "axios";
// import router from "react"


// const username = process.env.INTRINIO_API_USERNAME;
// const password = process.env.INTRINIO_API_PASSWORD;
// const auth = "Basic " + new Buffer(username + ':' + password).toString('base64');

// const auth = {}


// The getStock method retrieves stock from the server
// It accepts a "query" or term to search the stock api for
export default {
  randomStock: function(query) {

    
  },
  
  getStock: function(query) {

    // router.get("/stocks", (req, res) => {

    return axios.get(`https://api.iextrading.com/1.0?/stock/aapl/batch?types=quote,news,chart&range=1m&last=1`, { params: { q: query } });
    // })
  },
 
  // Deletes the stock with the given id
  deleteStock: function(id) {
    return axios.delete("/api/stocks/" + id);
  },
  
  // Saves a stock to the database
  saveStock: function(stockData) {
    return axios.post("/api/stocks", stockData);
  },
  
  loadRandomStock: function(query) {
    // router.get("/stocks", (req, res) => {

    return axios.get("https://api.iextrading.com/1.0/stock/aapl/batch?types=quote,news,chart&range=1m&last=1");
  // }) 
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






//   export default {
    // getRandomStock: function(query) {
    //   return axios.get("https://api.intrinio.com/companies?ticker=AAPL",  {headers: { "Authorization": auth }}, { params: { q: query } });
    // }  
// };
