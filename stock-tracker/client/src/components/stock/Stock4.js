import React, {Component} from "react";
import axios from "axios"

import nasdaqFinanceNpm from "../../utils/nasdaqFinanceNpm"
// import { loadQuoteForStock, loadCompanyLogo, loadNews } from '../../../../routes/apiRoutes3'



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
    const apiResponse = await nasdaqFinanceNpm.getInfo;
    axios.get('/api/nasdaq-finance-attempt')
      .then(data => console.log(data))
      this.setState ({
        stock: apiResponse.data
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