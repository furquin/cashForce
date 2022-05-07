const express = require('express');
const cnpjs = require('../controllers/cnpjs')

const routes = express.Router()

routes
    .route('/')
    .get(cnpjs);

module.exports = routes
