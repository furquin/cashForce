const express = require('express');
const orders = require('../controllers/orders')

const routes = express.Router()

routes
    .route('/')
    .get(orders);

module.exports = routes
