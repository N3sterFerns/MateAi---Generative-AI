import mongoose from "mongoose";

const connectDB = ()=>{
    mongoose.connect(`mongodb+srv://nfcoding:${process.env.MONGO_PASS}@mateai.43fvr.mongodb.net/?retryWrites=true&w=majority&appName=mateai`)
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log(err);
    });
}


export default connectDB;