// const axios = require('axios');
const router = require("express").Router();
const nf = require('nasdaq-finance')


// const username = "5ea1efe25726d96bd3301b88a9b1438d";
// const password = "f3779b9eb9fd52dd1b4ed24630feb9b9";
// const auth = "Basic " + new Buffer(username + ':' + password).toString('base64');

router.route('/nasdaq-finance-attempt')
    get((req, res) => {
        const nasdaqClient = new nf()
        nasdaqClient.getInfo('TSLA')
                    .then(data => res.json(data))
                    .catch(err => res.json({err: err.message}))
      
    })




// const api = axios.create({
//     baseURL: "https://api.iextrading.com/1.0",
//     IEXClient: "fetch",
//     iex: () => {
//       iex.stockCompany('AAPL')
//     .then(quote => console.log(quote))
    
//     }
//   })
  


// router.route('/intrinoattempt')
//   api.get((req, res) => {
//     axios.get(`https://api.iextrading.com/1.0`,  {headers: { "Authorization": auth }}, { params: { q: 'aapl' } })
//       .then(data => res.json(data))
//       .catch(err => res.json({err: err.message}))
//   })

module.exports = router;