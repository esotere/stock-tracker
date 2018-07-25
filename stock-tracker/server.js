const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/apiRoute.js");
// const routes2 = require("./routes/apiRoutes2.js");
// const routes3 = require("./routes/apiRoutes3");
const app = express();
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static("client/build"));
// }
// Add routes, both API and view
app.use(routes);
// app.use(routes2);
// app.use(routes3)

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactstocklist");

// Start the API server
app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
