import mongoose from "mongoose";

const connectDB = ()=>{
    mongoose.connect(`mongodb+srv://nesterferns:${process.env.MONGO_PASS}@mateai.rwimr.mongodb.net/?retryWrites=true&w=majority&appName=Mateai`).then(()=>{
        console.log("DB Connected")
    }).catch((err)=>{
        console.log("DB ERROR")
    })
}


export default connectDB;