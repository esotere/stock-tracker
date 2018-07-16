import axios from "axios"
import router from "react"
import parser from 'html-react-parser';

var googleFinance = require('google-finance');
var util = require('util');

require('colors');

var _ = require('lodash');
// var googleFinance = require('../..');



let SYMBOLS = [
    'NASDAQ:AAPL',
    'NASDAQ:GOOGL',
    'NASDAQ:MSFT',
    'NASDAQ:YHOO',
    'NYSE:IBM',
    'NYSE:TWTR'
  ];
  
  export default {

    loadStock(stock){
        router.get("/stocks", (req, res) => {


googleFinance.companyNews({
  symbol: SYMBOLS
})
return axios.get(url)
            .then(function (result) {
            _.each(result, function (news, symbol) {
      console.log(util.format(
        '=== %s (%d) ===',
        symbol,
        news.length
      ).cyan);
      if (news[0]) {
        console.log(
          '%s\n...\n%s',
          JSON.stringify(news[0], null, 2),
          JSON.stringify(news[news.length - 1], null, 2)
        );
      } else {
        console.log('N/A');
      }
    })
    });
  });

// googleFinance.historical({
//   symbol: SYMBOLS,
//   from: '2014-01-01',
//   to: '2014-12-31'
// }, function (err, quotes) {
//   //...
// });

// googleFinance.companyNews({
//     symbol: SYMBOL
//   }, function (err, news) {
    
//   });
}
}