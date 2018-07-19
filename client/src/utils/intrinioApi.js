import axios from "axios";
// import router from "react"
// const https = require("https");
const IntrinioRealtime = require('intrinio-realtime')


const baseUrl = `https://api.intrinio.com/companies?ticker=AAPL`
// const baseURL2 = `https://api.intrinio.com/prices?identifier=${symbol}`

//  Create an IntrinioRealtime instance
  var ir = new IntrinioRealtime({
    username: "5ea1efe25726d96bd3301b88a9b1438d",
    password: "9c91398114882d5df13a2469e7b9864f",
    provider: "iex"
  })

  // Listen for quotes
  ir.onQuote(quote => {
    var { ticker, type, price, size, timestamp } = quote
    console.log("QUOTE: ", ticker, type, price, size, timestamp)
  })

  // Join channels
  ir.join("AAPL", "MSFT", "GE")
  console.log(ir)



// The getStock method retrieves stock from the server
// It accepts a "query" or term to search the stock api for
export default {
  RandomStock: function(query) {
return axios.get(baseUrl, { params: { q: query } });
  },
  getStock: function(query) {
    return axios.get(baseUrl, { params: { q: query } });
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
