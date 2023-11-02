const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const router = require('./routes/index');

dotenv.config({ path: './config.env' });

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// Connecting to Database
const DB = process.env.DATABASE;
mongoose.connect(DB).then((connection) => {
  // console.log(connection.connections);
  console.log('DB connection successful');
});

// Routes
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
