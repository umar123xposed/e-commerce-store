import express from "express"
import {getProduct, postProduct} from "../controllers/productcontroller.js"
const Router = express.Router()

Router.get("/", getProduct)

Router.post("/", postProduct)

// Router.put("/",(req,res)=>{
    
// })

// Router.delete("/",(req,res)=>{
    
// })

export default Router