const express=require("express");
const app=express();
const {connectDb}=require("./util/database")
const userRouter=require("./routes/user")
require('dotenv').config();

app.use(express.json());
app.use('/',(rej,res)=>{
    res.send(<h1>Hii </h1>)
})


app.use("/api",userRouter);


app.listen(process.env.PORT,()=>{
    console.log("Server is listing on 3000");
});     
console.log("Database is Connection");

// connectDb()
// .then(()=>{
    
// }).catch(()=>{
//     console.log("Error");
    
// })
