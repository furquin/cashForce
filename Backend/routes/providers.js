const express = require('express');
const providers = require('../controllers/providers')

const routes = express.Router()

routes
    .route('/')
    .get(providers);

module.exports = routes