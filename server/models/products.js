import mongoose from "mongoose";
const Schema= mongoose.Schema

const product=new Schema({
    prductID:{
        type:Number
    },
    productname:{
        type:String
    }

    
})
export default mongoose.model("product",product)
