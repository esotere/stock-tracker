import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import API from "../../utils/iexAPI";

// import { loadQuoteForStock, loadCompanyLogo, loadNews } from '../../../../routes/apiRoutes3'



class Stock extends Component {
	state = {
		stock: {
			// quote: loadQuoteForStock,
			// companyLogo: loadCompanyLogo,
			// news: loadNews
		}
	};

	componentDidMount () {
		this.loadRandomStock()
		// this.loadQuoteForStock()
		// this.loadCompanyLogo()
		// this.loadNews()
	}

	loadRandomStock = async () => {
		const stockIdsRes = await API.getStock();

		const stockIds = stockIdsRes.data.map(data => data._id)

		const randomId = stockIds[Math.floor(Math.random() * stockIds.length)];

		const randomStock = await API.getstock(randomId);

		this.setState({
			stock: randomStock.data
		});
	}

	loadQuoteForStock = async () => {
		const stockIdsRes = await API.getStock();

		const stockIds = stockIdsRes.data.map(data => data._id)

		const selectedId = () => stockIdsRes(stockIds.data);

		const selectedStock = await API.getstock(selectedId);

		this.setState({
			stock: selectedStock.data
		});
	}

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-12">
						<Jumbotron>

							<h1>
								{this.state.stock.name}
								{/* {this.state.stock.companyLogo} */}
							</h1>
							<h2>
								{this.state.stock.symbol}
							</h2>
						</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col size="md-10 md-offset-1">
						<article>
							<h1>Summary</h1>
							{/* {this.state.stock.news} */}
							<p>
								{this.state.stock.summary}
							</p>
						</article>
					</Col>
				</Row>
				<Row>
					<Col size="md-2">
						{/* <Router>
						<Link to="/stocks">← Back to portfolio</Link>
						</Router> */}

					</Col>
				</Row>
			</Container>
		);
	}
}

export default Stock;
