import axios from "axios"
import router from "react"
import parser from 'html-react-parser';


// import { IEXClient } from 'iex-api'


// // const router = require("express").Router();

// const iex = new IEXClient(fetch)
// iex.stockCompany('AAPL')
//   .then(quote => console.log(quote))

// export default iex

const api = axios.create({
  baseURL: "https://api.iextrading.com/1.0",
  IEXClient: "fetch",
  iex: {
    stockCompany:'AAPL'
  }
})

// const api = axios.create({
//   baseURL: "https://api.iextrading.com/1.0"
// })


export default {

  loadRandomStock(stock){
    router.get("/stocks", (req, res) => {
    // let stock = (e.currentTarget).data('stock');
      let url=`https://api.iextrading.com/1.0?q=NASDAQ:${stock}`;
      return axios.get(url)
           .then(response => {
          let json = parser.parse(response.data);
          let bank = this.state.stocks;
          bank.price = json.l;
          this.setState({
              stocks: bank
          })
      });
    })
    },

  // loadRandomStock: function (query) {
  //   router.get("/stocks", (req, res) => {
  //     return api.get("/api/stock", { params: { q: query } })
  //       .then(res => res.data)
  //       .catch(err => res.status(422).json(err));

  //   })
  // },
  loadQuoteForStock: function (symbol) {
    router.get("/stocks", (req, res) => {
      return api.get(`/stock/${symbol}/quote`)
        .then(res => res.data)
        .catch(err => res.status(422).json(err));

    })
  },
  loadCompanyLogo: function (symbol) {
    router.get("/stocks", (req, res) => {
      return api.get(`/stock/${symbol}/logo`)
        .then(res => res.data.url)
        .catch(err => res.status(422).json(err));

    })
  },

  loadNews: function (symbol) {
    router.get("/stocks", (req, res) => {
      return api.get(`/stock/${symbol}/news/last`) //${range}
        .then(res => res.data)
        .catch(err => res.status(422).json(err));

    })
  },

  loadSixMonths: function (symbol) {
    router.get("/stocks", (req, res) => {
      return api.get(`/stock/${symbol}/chart/6m`)
        .then(res => res.data)
        .catch(err => res.status(422).json(err));

    })
  }
}

// export default router

// import axios from 'axios'

// const api = axios.create({
//   baseURL: 'https://api.iextrading.com/1.0'
// })


// export default {
//   loadRandomStock: function (symbol) {
//     router.get("/stocks", (req, res) => {
//       return api.get(`/stock/${symbol}/quote`)
//         .then(res => res.data)
//         .catch(err => res.status(422).json(err));

//     })
//   },
//   loadQuoteForStock: function (symbol) {
//     router.get("/stocks", (req, res) => {
//       return api.get(`/stock/${symbol}/quote`)
//         .then(res => res.data)
//         .catch(err => res.status(422).json(err));

//     })
//   },
//   loadCompanyLogo: function (symbol) {
//     router.get("/stocks", (req, res) => {
//       return api.get(`/stock/${symbol}/logo`)
//         .then(res => res.data.url)
//         .catch(err => res.status(422).json(err));

//     })
//   },

//   loadNews: function (symbol) {
//     router.get("/stocks", (req, res) => {
//       return api.get(`/stock/${symbol}/news/last`) //${range}
//         .then(res => res.data)
//         .catch(err => res.status(422).json(err));

//     })
//   },

//   loadSixMonths: function (symbol) {
//     router.get("/stocks", (req, res) => {
//       return api.get(`/stock/${symbol}/chart/6m`)
//         .then(res => res.data)
//         .catch(err => res.status(422).json(err));

//     })
//   }
// }

// // export default router