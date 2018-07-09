import axios from "axios";

// The getStock method retrieves stock from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getRandomStock: function(query) {
    return axios.get("/api/stock", { params: { q: query } });
  },
  getStock: function(query) {
    return axios.get("/api/stock", { params: { q: query } });
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
