import axios from "axios";


export default {
  getRandomStock: function(query) {
    return axios.get("/api/stock", { params: { q: query } });
  },
  getStock: function(query) {
    return axios.get("/api/stock", { params: { q: query } });
  },
  // Deletes the stock with the given id
  deleteStock: function(id) {
    return axios.delete("/api/stock/" + id);
  },
  // Saves a stock to the database
  saveStock: function(stockData) {
    return axios.post("/api/stock", stockData);
  }
};


// const username = "5ea1efe25726d96bd3301b88a9b1438d";
// const password = "9c91398114882d5df13a2469e7b9864f";
// const auth = "Basic " + new Buffer(username + ':' + password).toString('base64');

//   export default {
//     getRandomStock: function(query) {
//       return axios.get("https://api.intrinio.com/companies?ticker=AAPL",  {headers: { "Authorization": auth }}, { params: { q: query } });
//     }  
// };
