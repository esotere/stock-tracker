import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import API from "../../utils/nasdaq-financeNpm";
// import API from "../../utils/apiRoutes";

// import { loadQuoteForStock, loadCompanyLogo, loadNews } from '../../../../routes/apiRoutes3'

import { withRouter } from 'react-router';

class Stock extends Component {
	constructor(props) {
		super(props)
		this.stock = props.stock
		this.state = {
		stock: [

			]
		};
	}

	componentDidMount () {
		let symbol;

		if (this.props.match && this.props.match.params) {
			symbol = this.props.match.params.symbol;

			API.getStock(symbol)
				.then(data => {
					this.setState({
						totalRevenue: data.totalRevenue
					})
				})

		}
		// this.loadQuoteForStock()
		// this.loadCompanyLogo()
		// this.loadNews()
	}

		loadRandomStock = async () => {
			const stockIdsRes = await API.loadRandomStock();

			if (this.props.data) {
				const stockIds = stockIdsRes.data.map(data => data._id)
				const randomId = stockIds[Math.floor(Math.random() * stockIds.length)];
				const randomStock = await API.getstock(randomId);
				this.setState({
					stock: randomStock.data
				});
			}
		}

		getStock = async (symbol) => {
			const stockIdsRes = await API.getStock(symbol);

			if (this.props.data) {
				const stockIds = stockIdsRes.data.map(data => data._id)
				const selectedId = () => stockIdsRes(stockIds.data);
				const selectedStock = await API.getstock(selectedId);
				this.setState({
					stock: selectedStock.data
				});
			}
		}


	render() {
		const data = this.state.stock;
		const listItems = data.map((d) => <li key={d.ID +1}></li>);

		return (
			<Container fluid>
				<Row>
					<h1> Hey</h1>
					<p>{this.state.totalRevenue}</p>
					<Col size="md-12">
						<Jumbotron>

							<h1>
								{listItems}
								{/* {this.state.stock.companyLogo} */}
							</h1>
							<h2>
								{this.state.stock.symbol}
							</h2>
						</Jumbotron>
					</Col>
				</Row>
					{/* <Row>
						<Col size="md-10 md-offset-1">
							<article>
								<h1>Summary</h1>
								{this.state.stock.news}
								<p>
									{this.state.stock.summary}
								</p>
							</article>
						</Col>
					</Row>
					<Row>
						<Col size="md-2">
							<Router>
							<Link to="/stocks">← Back to portfolio</Link>
							</Router>

						</Col>
					</Row> */}
			</Container>
		);
	}
}

export default withRouter(Stock);

//=======================================================================================================
//=================================================================================================================
//===========================================================================================================

// import { Container } from "../../components/Grid";


// class Stock extends Component {
// 	constructor(props) {
// 		super(props)
// 	this.state = {
// 		stock: [{
// 			// quote: loadQuoteForStock,
// 			// companyLogo: loadCompanyLogo,
// 			// news: loadNews
// 		}]
// 	};
// }

// 	componentDidMount () {
// 		this.loadRandomStock()
// 		// this.loadQuoteForStock()
// 		// this.loadCompanyLogo()
// 		// this.loadNews()
// 	}

// 	loadRandomStock = async () => {
// 		const stockIdsRes = await API.getStock();

// 		const stockIds = stockIdsRes.data.map(data => data._id)

// 		const randomId = stockIds[Math.floor(Math.random() * stockIds.length)];

// 		const randomStock = await API.getstock(randomId);

// 		this.setState({
// 			stock: randomStock.data
// 		});
// 	}

// 	loadQuoteForStock = async () => {
// 		const stockIdsRes = await API.getStock();

// 		const stockIds = stockIdsRes.data.map(data => data._id)

// 		const selectedId = () => stockIdsRes(stockIds.data);

// 		const selectedStock = await API.getstock(selectedId);

// 		this.setState({
// 			stock: selectedStock.data
// 		});
// 	}

// 	render() {
// 		return (
// 			<Container fluid>
// 				{/* <Row>
// 					<Col size="md-12"> */}
// 						<Jumbotron>
// 						<table>
//               <thead>
//                   <tr>
// 					  <h1>
//                       <th> ID</th>
//                       <th> stock</th>
//                       <th> price</th>
//                       <th> industry</th>
// 					  </h1>
//                   </tr>
//               </thead>
//               <tbody>
// 			  {
//                   this.state.stocks.map((stocks, i) => {
//                       return (
//                         <tr key={i}>
//                             <td>{stocks.ID}</td>
// 						<td>
// 							<h2>
// 								{this.state.stock.name}
// 								{/* {this.state.stock.companyLogo} */}
// 							</h2>
// 							</td>
// 							<td>
// 							<h2>
// 								{this.state.stock.symbol}
// 							</h2>
// 							</td>
// 							<td>
// 								{this.state}

// 							</td>
// 							</tr>
// 					  )
// 							})
// 							}
// 							</tbody>
// 							</table>
// 						</Jumbotron>

// 			</Container>
// 		);
// 	}
// }

// export default Stock;

