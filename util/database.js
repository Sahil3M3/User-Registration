const mongoose =require('mongoose');

const connectDb=async () => {
    
await mongoose
.connect(process.env.URL);
}



module.exports={
    connectDb
}

