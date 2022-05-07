const express = require('express');
const buyers = require('../controllers/buyers')

const routes = express.Router()

routes
    .route('/')
    .get(buyers);

module.exports = routes
