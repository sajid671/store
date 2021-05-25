const Products = require("./files/data");
const ConnectDB = require("./files/db");
const Product = require("./files/model");

ConnectDB();
const importDB=async()=>{
    try {
        await Product.deleteMany({});
        await Product.insertMany(Products);
        console.log("Data Import Success");
    } catch (error) {
        console.log("Data Import not Success");
    }
}

importDB();