const express = require('express'),
dotenv = require('dotenv'),
morgan = require('morgan');

// Environment
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 3000;

// Route
app.use('/', require('./route/index'));

app.listen(PORT, (err) => {
  if (err) throw new Error(err);
  console.log(`Server is in ${process.env.NODE_ENV} mode, and running on ${PORT}`);
});