import axios from "axios"
import router from "react"

import { IEXClient } from 'iex-api'


// const router = require("express").Router();

const iex = new IEXClient(fetch)
iex.stockCompany('AAPL')
  .then(quote => console.log(quote))

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
  loadRandomStock: function (symbol) {
    router.get("/stocks", (req, res) => {
      return api.get(`/stock/${symbol}/quote`)
        .then(res => res.data)
        .catch(err => res.status(422).json(err));

    })
  },
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