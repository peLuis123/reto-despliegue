const express = require('express');
const {addProduct} = require('../controllers/product.controllers')

const api = express.Router()


api.post('/products',addProduct )

module.exports=api