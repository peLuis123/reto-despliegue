const express = require('express');
const bodyParser = require('body-parser')
const productRoutes = require('./routes/product')
const app = express();


app.use(bodyParser.urlencoded({extended:false}))
app.use('/v1',productRoutes)
app.use(bodyParser.json())
/*

app.use(require('./routes/index.routes'))
require('./server')


console.log('server on port', 3000);
*/app.listen(3000);