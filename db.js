/** @format */

const mongoose = require('mongoose');

const generateData = require('./createEmployeeScript');

module.exports = db = () => {
  mongoose
    .connect(process.env.MONGO_URL, { useUnifiedTopology: true })
    .then(() => {
      console.log('DB connected');
      generateData();
    })
    .catch((err) => console.log('DB connection error:' + err));
};
