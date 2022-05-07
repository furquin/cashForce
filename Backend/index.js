const express = require('express');
const routerUsers = require('./routes/users')
const routerBuyers = require('./routes/buyers')
const routerProviders = require('./routes/providers')
const routerCnpjs = require('./routes/cnpjs')
const routerOrders= require('./routes/orders')
const error = require('./middleware/error')

require('dotenv').config()

const app = express();
app.use(express.json());

app.use(error)
app.use('/user', routerUsers)
app.use('/buyers', routerBuyers)
app.use('/providers', routerProviders)
app.use('/cnpjs', routerCnpjs)
app.use('/orders', routerOrders)


app.listen(3000, () => console.log('ouvindo porta 3000'))