// import nf from 'nasdaq-finance'
import _ from 'lodash';
import request from 'request-promise';
// import Promise from 'bluebird';
import cheerio from 'cheerio';
import bunyan from 'bunyan';


// const router = require("express").Router();

// const nf = new NasdaqFinance()

export default class Nasdaq {
    constructor(config, logger) {
      this.config = _.defaults(config, {
        requestConcurrency: 4,
        requestDelay: 0
      });

      this.logger = logger || bunyan.createLogger({ name: 'Nasdaq' });
      this.request = request;
    }
  
    _getPageId(section, page = 0) {
      return section * 100000 + page;
    }
  
    _getDataUrl(ticker) {
      return `http://www.nasdaq.com/g00/symbol/${ticker}/time-sales`;
    }
  
    _getTickerPage(ticker, postfix = '') {
      const uri = this._getDataUrl(ticker) + postfix;
      return this.request({
        uri,
        transform: body => cheerio.load(body)
      });
    }
  /**
   * Load price from a cheerio object
   * @param $ Cheerio object
   * @returns {null|number}
   * @private
   */
//   _parsePrice($) {
//     return Number(
//       $('#qwidget_lastsale').text().replace('$', '')
//     );
//   }

  /**
   * Load info about given ticker
   * @param ticker Ticker eg tsla
   * @returns {Promise} Resolves into an object with ticker info
   */
  getInfo(ticker) {
    return this._getTickerPage(ticker)
    //   .then($ => ({
    //     name: $('.greenCompanyName').text(),
    //     exchange: $('#qbar_exchangeLabel').text().replace('Exchange:', ''),
    //     industry: $('#qbar_sectorLabel a').text(),
    //     image: $('#logo-wrap img').attr('x-defer-src'),
    //     price: this._parsePrice($),
    //     priceChange: $('#qwidget_netchange').text(),
    //     priceChangePercent: $('#qwidget_percent').text().replace('%', ''),
    //   }));
  }
}  

// export default {

// loadRandomStock: function(){
//   router.route('/nasdaq-finance-attempt')
//              .get((req,res) => {
//     return nf.getInfo('TSLA')
//              .then(data => res.json(data))
//              .catch(err => res.json(err))

//         })
//     }
// }
// module.exports = router
