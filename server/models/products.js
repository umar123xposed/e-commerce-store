import mongoose from "mongoose";
const Schema= mongoose.Schema

const product=new Schema({
    name: String,
    image: String,
    count:{
        type: Number,
        required: true
    }

    
})
export default mongoose.model("product",product)
