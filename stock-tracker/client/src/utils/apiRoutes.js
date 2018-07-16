import axios from "axios"
import router from "react"

// const axios = require("axios");
// const router = require("express").Router();
// // const alpha = require('alphavantage')({ key: 'LFMT1TZ5KQGSDKHN' });
// const alphaVantageAPI = { 
//  apiKey: 'LFMT1TZ5KQGSDKHN',
//  outputsize: 'compact'
// }
// const queryUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=LFMT1TZ5KQGSDKHN"
// // const apiKey = "LFMT1TZ5KQGSDKHN";
// const api = axios.create({
//   baseURL: queryUrl
// })



// router.get("/stocks", (req, res) => {
//   api
//     .get(queryUrl, alphaVantageAPI, { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

// module.exports = router;

// // https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=LFMT1TZ5KQGSDKHN

// // const alpha = require('alphavantage')({ key: 'LFMT1TZ5KQGSDKHN' });





export default {

    loadStock(stock){
        router.get("/stocks", (req, res) => {
            const queryUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=LFMT1TZ5KQGSDKHN"
            const apiKey = "LFMT1TZ5KQGSDKHN";
            const api = axios.create({
              baseURL: queryUrl
            })

return api.get(queryUrl, { params: req.query })
            // .then(function (result) {
    .then(function (result) {
    (({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));            
    //         _.each(result, function (data, symbol) {
    //   console.log(util.format(
    //     '=== %s (%d) ===',
    //     symbol,
    //     news.length
    //   ).cyan);
    //   if (news[0]) {
    //     console.log(
    //       '%s\n...\n%s',
    //       JSON.stringify(news[0], null, 2),
    //       JSON.stringify(news[news.length - 1], null, 2)
    //     );
      })
    //    else {
    //     console.log('N/A');
    //   }
     })
//     });
//   });

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