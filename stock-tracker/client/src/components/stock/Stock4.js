import React, {Component} from "react";
import axios from "axios"


// import nasdaqClient from "../../utils/nasdaqFinance"

// import nasdaqFinanceNpm from "../../utils/nasdaqFinanceNpm"
// import { loadQuoteForStock, loadCompanyLogo, loadNews } from '../../../../routes/apiRoutes3'
// const router = require("express").Router();
// const nf = require('nasdaq-finance')
const quote = require('stock-quote');


class Stock extends Component {
	constructor(props) {
		super(props)
		this.stock = props.stock
	this.state = {
		stock: []
	};
}

componentWillMount() {

    this.loadStock()

    }

loadStock = async () => {

// router.route('/nasdaq-finance-attempt')
axios.get('/explore', (req, res) => {
    // app.get('/nasdaq-finance-attempt', (req, res) => {

        quote.getQuote('GOOGL') // or quote.getQuote('GOOGL', '');
        .then( (data) => {
            res.json(data)
        })
        .catch(err => {
            res.json(err.message)
        })
})

    const apiResponse = await quote.getQuote();

    // const apiResponse = await nasdaqClient.getInfo();
    // axios.get('/api/nasdaq-finance-attempt')
    //      .then(data => console.log(data))
     this.setState ({
        stock: apiResponse
      })

}
render(){
    const data = this.state.stock;
    const listItems = data.map((d) => <li key={d.ID +1}></li>);
    return (
        <div>
    <h1>{listItems}</h1>
    </div>
    )
}
}
export default Stock
