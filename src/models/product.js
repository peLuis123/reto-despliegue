const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema= Schema({
    name: String,
    size: Number,
    unitaryPrice: Number,
    description: string
}, {
    timestamps: true
})

module.exports = mongoose.model('Products', ProductSchema)