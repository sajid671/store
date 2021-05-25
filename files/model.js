const mongoose = require('mongoose');


const prodModel = mongoose.Schema({
    title:String,
    price:Number,
    quantity:String
})

const Product = mongoose.model("product", prodModel);

module.exports = Product