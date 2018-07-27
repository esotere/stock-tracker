import nf from 'nasdaq-finance'
// const nf = new NasdaqFinance()
const nasdaqClient = new nf()


// nasdaqClient.getInfo() = (ticker) => {
//     return this._getTickerPage(ticker)
//         console.log
//   }
      nasdaqClient.getInfo('TSLA')
        .then((response) => {console.log(response)})
        .catch(console.error)


        //     // export default {
        //       RandomStock: function(query) {
        //         return axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=LFMT1TZ5KQGSDKHN`, { params: { q: query } });
        //       },
        //       getStock: function(query) {
        //         return axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=LFMT1TZ5KQGSDKHN`, { params: { q: query } });
    
                
        //       }





export default nasdaqClient
// export default {
//     randomStock: function(query) {
  
      
//     },
    
//     getStock: function(query) {
  
//       // router.get("/stocks", (req, res) => {
  
//       return axios.get(`https://api.iextrading.com/1.0?/stock/aapl/batch?types=quote,news,chart&range=1m&last=1`, { params: { q: query } });
//       // })
//     },
   
//     // Deletes the stock with the given id
//     deleteStock: function(id) {
//       return axios.delete("/api/stocks/" + id);
//     },
    
//     // Saves a stock to the database
//     saveStock: function(stockData) {
//       return axios.post("/api/stocks", stockData);
//     },
    
//     loadRandomStock: function(query) {
//       // router.get("/stocks", (req, res) => {
  
//       return axios.get("https://api.iextrading.com/1.0/stock/aapl/batch?types=quote,news,chart&range=1m&last=1");
//     // }) 
//     } 
//   };
  


