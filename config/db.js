import mongoose from "mongoose";



function connectToDB() {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("connected")
    })
    .catch((err)=>{
        console.log(`cant connect ${err}`)
    })
}

export default connectToDB