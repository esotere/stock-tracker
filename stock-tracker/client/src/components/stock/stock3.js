import axios from "axios"
import parser from 'html-react-parser';
import React, { Component } from "react";
// import React from "react";


// import { render } from 'react-dom';
// import API from "../../utils/googleFnanceApi";



class Stock3 extends Component {
    constructor(props){
      super(props)
      this.state = {
        stocks:[
          {"ID":"1", "stock":"AAPL", "price": "$785.34",
           "industry":"Tech"},
        //   {"ID":"2", "stock":"WMT", "price": "$68.75",
        //    "industry":"Tech"},
        //   {"ID":"3", "stock":"AMZN", "price": "$810.45",
        //    "industry":"Tech"},
        //   {"ID":"4", "stock":"FB", "price": "$95.34",
        //   "industry":"Tech"},
        ],
      };
    }
    
    componentDidMount(){
        this.loadStock()
    }

   loadStock(stock){
    // let stock = (e.currentTarget).data('stock');
      let url=`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=LFMT1TZ5KQGSDKHN`;
      axios.get(url)
           .then(response => {
          let json = parser.parse(response.data);
          let bank = this.state.stocks;
          bank.price = json.l;
          this.setState({
              stocks: bank
          })
      });
    }

    deleteStock(stock) {
        
    }
  
    render(){
     return (
         <div>
             <h2>stock</h2>
             {this.state.stock}
         </div>
     )
    }
}
export default Stock3