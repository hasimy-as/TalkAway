const express = require('express'),
	dotenv = require('dotenv'),
	morgan = require('morgan'),
	hbs = require('express-handlebars');

// Environment
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 3000;

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
};

// Route
app.use('/', require('./route/index'));

// Handlebars
app.engine('.hbs',
	hbs({
		defaultLayout: 'main',
		extname: '.hbs',
	}),
).set('view engine', '.hbs');

app.listen(PORT, (err) => {
	if (err) throw new Error(err);
	console.log(
		`Server is in ${process.env.NODE_ENV} mode, and running on ${PORT}`,
	);
});
