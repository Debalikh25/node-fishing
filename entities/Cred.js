const mongoose   = require("mongoose")

const credSchema = mongoose.Schema({

    username : {
        type : String
    },

     password : {
        type : String
     }

})

const Cred  = mongoose.model("cred" , credSchema)

module.exports = Cred