const express = require('express');
const app = express();
const connectDB = require('./files/db');
const router = require('./files/Routers');

connectDB();

app.use("/products",router)
app.listen(1234,()=>console.log("server started"))