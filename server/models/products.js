import mongoose from "mongoose";
const Schema= mongoose.Schema

const product=new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    richdescription:{
        type: String,
        default:""
    },

    image: {
        type: String,
        default:""
    },
    images:[{
        type: String,
        default:""
    }],
    brand:{
        type:String,
        default:""
    },
    price:{
        type: Number,
        required: true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true

    },
    count:{
        type: Number,
        required: true,
        min: 0,
        max: 1000
    },
    date:{
        type: Date,
        default: Date.now
    }

    
})
export default mongoose.model("product",product)
