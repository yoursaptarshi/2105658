const express = require('express')
const dotenv = require('dotenv');
const app = express();
const products = require('./routes/products')
dotenv.config({ path: './config/config.env' });
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(products);
module.exports = app;