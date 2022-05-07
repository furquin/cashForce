const cors = require('cors')
const express = require('express');

const app = express()

app.use(express.json())

const initCors = (_req, res, next) => {
    try {
      res.header("Access-Control-Allow-Origin", "*")
      res.header("Access-Control-Allow-Methods", 'GET')
      app.use(cors())

      next()
  } catch (e) {
      next(e);
  }
  
};

module.exports = initCors;