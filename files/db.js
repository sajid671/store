const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://db123:pass123@cluster0.rtddd.mongodb.net/mernstack?retryWrites=true&w=majority"

const ConnectDB=async()=>{
    try {
      mongoose.connect(MONGO_URI,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        },
        console.log("mongoose connected"))
    } catch (error) {
        console.log("mongoose not connected")
    }
}

module.exports=ConnectDB;