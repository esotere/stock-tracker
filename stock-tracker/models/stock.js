const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StockSchema = new Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  summary: String,
  date: { type: Date, default: Date.now }
});

const Stock = mongoose.model("Stock", StockSchema);

module.exports = Stock;