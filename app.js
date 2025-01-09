const express=require("express");
const app=express();
const {connectDb}=require("./util/database")
const userRouter=require("./routes/user")
require('dotenv').config();

app.use(express.json());


app.use("/api",userRouter);



connectDb()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server is listing on 3000");
    });     
    console.log("Database is Connection");
    
}).catch(()=>{
    console.log("Error");
    
})
