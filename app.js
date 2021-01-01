const express = require('express'),
	dotenv = require('dotenv'),
	morgan = require('morgan'),
	connect = require('./config/db'),
	passport = require('passport'),
	session = require('express-session'),
	methodOverride = require('method-override'),
	mongoose = require('mongoose'),
	MongoStore = require('connect-mongo')(session),
	hbs = require('express-handlebars');

// Environment
dotenv.config({ path: './config/config.env' });

connect();

const app = express();

const PORT = process.env.PORT || 3000;

// Parser and Method Override
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
	methodOverride(function (req, res) {
		if (req.body && typeof req.body === 'object' && '_method' in req.body) {
			// look in urlencoded POST bodies and delete it
			let method = req.body._method;
			delete req.body._method;
			return method;
		}
	}),
);

// Session
app.use(
	session({
		secret: 'keyboards',
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({ mongooseConnection: mongoose.connection }),
	}),
);

// Passport
require('./config/passport')(passport);

// Logging
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
	res.locals.user = req.user || null;
	next();
});

// Helpers
const {
	formatDate,
	stripTags,
	truncate,
	editIcon,
	select,
} = require('./helpers/hbs');

// Route
app.use('/', require('./route/index'));
app.use('/auth', require('./route/auth'));
app.use('/stories', require('./route/stories'));

// Handlebars
app.engine(
	'.hbs',
	hbs({
		defaultLayout: 'main',
		extname: '.hbs',
		helpers: {
			formatDate,
			stripTags,
			truncate,
			editIcon,
			select,
		},
	}),
).set('view engine', '.hbs');

app.listen(PORT, (err) => {
	if (err) {
		throw new Error(err);
	}
	console.log(
		`Server is in ${process.env.NODE_ENV} mode, and running on ${PORT}`,
	);
});
