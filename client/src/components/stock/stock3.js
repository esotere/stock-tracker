import axios from "axios"
import parser from 'html-react-parser';
import React, { Component } from "react";
// import React from "react";


// import { render } from 'react-dom';
// import API from "../../utils/apiRoutes";



class Stock3 extends Component {
    constructor(props){
      super(props)
      this.state = {
        stocks:[
            
          {"ID":"1", "stock":"AAPL", "price": "$785.34",
           "industry":"Tech"},
          {"ID":"2", "stock":"WMT", "price": "$68.75",
           "industry":"Tech"},
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
    if (this.props.data) {

    // let stock = (e.currentTarget).data('stock');
    //   const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
      let url=`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=LFMT1TZ5KQGSDKHN`;
     return axios.get(url)
           .then(response => {
          let json = parser.parse(response.data);
          let bank = this.state.stocks;
          bank.price = json.l;
          this.setState({
              stocks: bank
          })
      });
    }
    }

    deleteStock(stock) {
        
    }
  
    render(){
        const data = this.state.stocks;
        const listItems = data.map((d) => <li key={d.ID}>{d.ID}, {d.stock}, {d.price}, {d.industry}</li>);


     return (
         <div>
             <h2>stock3</h2>
             <h3>{listItems}</h3>
             {/* <h3> {this.state.stocks}</h3>  */}
             <h3> {this.state.stock}</h3> 
            <h3> {this.props.children}</h3>
         </div>
     )
    }
}
export default Stock3