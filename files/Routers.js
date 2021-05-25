const express = require('express');
const Product = require('./model');
const router = express.Router();

router.get("/",async(req,res)=>{
try {
    const allProd = await Product.find({});
    res.json(allProd);
} catch (error) {
    console.log("error in get method")
}
})

module.exports = router;