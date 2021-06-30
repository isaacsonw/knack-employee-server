/** @format */

require('dotenv').config();
const express = require('express');
const db = require('./db');
const cors = require('cors');

const routes = require('./Modules/EmployeeModules/routes');

const app = express();

db();

// const allowedOrigin = ['https://knack-employees.herokuapp.com/'];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors('*'));

app.use('/api/v1', routes);

const port = process.env.PORT || 4000;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('server running on port' + port);
});
