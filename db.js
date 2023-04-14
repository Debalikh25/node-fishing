const mongoose  = require("mongoose")


const connectDB  =   async ()=>{
    
    try{
         
          await mongoose.connect("mongodb+srv://secc4000:9RgD5qgkB2PoSk3w@cluster0.ymu7ezo.mongodb.net/test")
          console.log("Database Connected Successfully")
    }

    catch(error){
        console.log(error)
    }

}


module.exports  =connectDB;