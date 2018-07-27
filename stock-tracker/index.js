// const express = require('express');
// const bodyParser = require('body-parser');
// const passport = require('passport');
// const config = require('./config');
// const mongoose = require('mongoose');

// mongoose.connect(config.dbUri);

// // connect to the database and load models
// const { Stock, User } = require('./models');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // tell the app to look for static files in these directories
// app.use(express.static('./static/'));
// app.use(express.static('./client/dist/'));
// // tell the app to parse HTTP body messages
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // pass the passport middleware
// app.use(passport.initialize());

// // load passport strategies
// const localSignupStrategy = require('./passport/local-signup');
// const localLoginStrategy = require('./passport/local-login');
// passport.use('local-signup', localSignupStrategy);
// passport.use('local-login', localLoginStrategy);

// // pass the authenticaion checker middleware
// const authCheckMiddleware = require('./middleware/authCheck');
// app.use('/api', authCheckMiddleware);

// // routes
// app.use(routes);
// app.get('/nasdaq-finance-attempt', (req, res) => {
// 	res.json('dsfds')
// 	const nasdaqClient = new nf()
// 	nasdaqClient.getInfo('TSLA')
// 				.then(data => res.json(data))
// 				.catch(err => res.json({err: err.message}))
  
// })
// const authRoutes = require('./routes/auth');
// const apiRoutes = require('./routes/api');
// app.use('/auth', authRoutes);
// app.use('/api', apiRoutes.stocks);


// app.get('/nasdaq-finance-attempt', (req, res) => {
// 	res.json('dsfds')
// 	const nasdaqClient = new nf()
// 	nasdaqClient.getInfo('TSLA')
// 				.then(data => res.json(data))
// 				.catch(err => res.json({err: err.message}))
  
// })

// // Set Port, hosting services will look for process.env.PORT
// app.set('port', (process.env.PORT || 3000));

// // start the server
// app.listen(app.get('port'), () => {
//   console.log(`Server is running on port ${app.get('port')}`);
// });