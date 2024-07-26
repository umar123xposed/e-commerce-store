import mongoose from "mongoose";
const Schema= mongoose.Schema

const Category= new Schema({
    
    name:{
        type: String,
        required: true
    },
    color:{
        type: String,

    },
    icon:{
        type: String
    }

})

export default mongoose.model("Category", Category)