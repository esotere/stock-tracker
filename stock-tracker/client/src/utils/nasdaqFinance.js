import nf from 'nasdaq-finance'
const nasdaqClient = new nf()
// const nf = new NasdaqFinance()


const j = nasdaqClient.getInfo('TSLA')
.then((response) => {
console.log(response)
})
.catch(console.error)
// export default j
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
  


