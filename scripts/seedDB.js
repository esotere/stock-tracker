const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the stocks collection and inserts the stocks below

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

const stockSeed = [
	
	{
		
		name: "",
		symbol: "",
		summary: "",		
		date: new Date(Date.now())
	}
];

db.stock
	.remove({})
	.then(() => db.stock.collection.insertMany(stockSeed))
	.then(data => {
		console.log(data.insertedIds.length + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
