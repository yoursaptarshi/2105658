const express = require('express');
const { getProductsInCategory } = require('../controllers/products');

const Router = express.Router();

Router.route('/categories/:categoryname/companies/:companyname/products').get(getProductsInCategory);

module.exports = Router;