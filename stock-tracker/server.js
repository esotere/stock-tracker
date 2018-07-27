const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');
const mongoose = require('mongoose');
const nf = require("nasdaq-finance");

const lol = nf.default;
const nasdaqClient = new lol()

mongoose.connect(config.dbUri);

// connect to the database and load models
const { Stock, User } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

// tell the app to look for static files in these directories
app.use(express.static('./static/'));
app.use(express.static('./client/dist/'));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./middleware/authCheck');
app.use('/api', authCheckMiddleware);

// routes
// app.use(routes);

const quote = require('stock-quote');
app.get('/nasdaq-finance-attempt', (req, res) => {

	quote.getQuote('GOOGL') // or quote.getQuote('GOOGL', '');
	.then( (data) => {
		res.json(data)
	})
	.catch(err => {
		res.json(err.message)
	})
	
  
})

const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes.stocks);


// Set Port, hosting services will look for process.env.PORT
app.set('port', (process.env.PORT || 3001));

// start the server
app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`);
});





// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const routes = require("./routes");
// // const routes2 = require("./routes/apiRoutes2.js");
// // const routes3 = require("./routes/apiRoutes3");
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Define middleware here
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// // Serve up static assets (usually on heroku)
// // if (process.env.NODE_ENV === "production") {
// // 	app.use(express.static("client/build"));
// // }
// // Add routes, both API and view
// app.use(routes);
// // app.use(routes2);
// // app.use(routes3)

// // app.get('/nasdaq-finance-attempt', (req, res) => {
// // 	res.json('dsfds')
// // 	const nasdaqClient = new nf()
// // 	nasdaqClient.getInfo('TSLA')6
// // 				.then(data => res.json(data))
// // 				.catch(err => res.json({err: err.message}))
  
// // })
// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactstocklist");

// // mongoose.Promise = Promise;
// // mongoose.connect(MONGODB_URI, {
// //     useNewUrlParser: true
// // });

// // Start the API server
// app.listen(PORT, function() {
// 	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
