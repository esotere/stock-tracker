import axios from "axios";
// const router3 = require("express").Router();
import { IEXClient } from 'iex-api'
 
const iex = new IEXClient(fetch)
iex.stockCompany('AAPL')
  .then(quote => console.log(quote))



const api = axios.create({
    baseURL: 'https://api.iextrading.com/1.0'
  })
  
  export function loadQuoteForStock(symbol) {
    return api.get(`/stock/${symbol}/quote`)
      .then(res => res.data)
  }
  
  export function loadCompanyLogo(symbol) {
    return api.get(`/stock/${symbol}/logo`)
      .then(res => res.data.url)
  }
  
  export function loadNews(symbol) {
    return api.get(`/stock/${symbol}/news/last`) //${range}
      .then(res => res.data)
  }
  
  export function loadSixMonths(symbol) {
    return api.get(`/stock/${symbol}/chart/6m`)
      .then(res => res.data)
  }
  
  
  // const api = axios.create({
  //   baseURL: 'https://api.iextrading.com/1.0'
  // })
  
  // router3.get("/stocks", (req, res) => {
  //   api
  //     .get(queryUrl2,  {headers: { "Authorization": auth }}, { params: req.query })
  //     .then(({ data: { results } }) => res.json(results))
  //     .catch(err => res.status(422).json(err));
  // });
  
  // module.exports = router3;

  
  


// The getStock method retrieves stock from the server
// It accepts a "query" or term to search the recipe api for
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

// import axios from 'axios'

