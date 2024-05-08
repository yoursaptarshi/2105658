const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:String,
    price:Number,
    rating:Number,
    discount:Number,
    availability:String,
    category:String,
    company:String,
    
})

moodule.exports = mongoose.model("Products",productSchema);