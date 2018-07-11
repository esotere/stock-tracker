// import axios from "axios";



// // The getStock method retrieves stock from the server
// // It accepts a "query" or term to search the recipe api for
// export default {
//   getRandomStock: function(query) {
//     return axios.get("/api/stock", { params: { q: query } });
//   },
//   getStock: function(query) {
//     return axios.get("/api/stock", { params: { q: query } });
//   },
//   // Deletes the stock with the given id
//   deleteStock: function(id) {
//     return axios.delete("/api/stocks/" + id);
//   },
//   // Saves a stock to the database
//   saveStock: function(stockData) {
//     return axios.post("/api/stocks", stockData);
//   }
// };


import axios from 'axios'

const api = axios.create({
  baseURL: "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=LFMT1TZ5KQGSDKHN"
})


export default {
loadQuoteForStock: function (symbol) {
  return api.get(`/stock/${symbol}/quote`)
    .then(res => res.data)
},

loadCompanyLogo: function (symbol) {
  return api.get(`/stock/${symbol}/logo`)
    .then(res => res.data.url)
},

loadNews: function (symbol) {
  return api.get(`/stock/${symbol}/news/last`) //${range}
    .then(res => res.data)
},

loadSixMonths: function (symbol) {
  return api.get(`/stock/${symbol}/chart/6m`)
    .then(res => res.data)
}
}

// const username = "5ea1efe25726d96bd3301b88a9b1438d";
// const password = "9c91398114882d5df13a2469e7b9864f";
// const auth = "Basic " + new Buffer(username + ':' + password).toString('base64');

//   export default {
//     getRandomStock: function(query) {
//       return axios.get("https://api.intrinio.com/companies?ticker=AAPL",  {headers: { "Authorization": auth }}, { params: { q: query } });
//     }  
// };
