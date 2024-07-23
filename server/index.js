import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import product from "./models/products.js"

dotenv.config()
const PORT=3000


const app= express()
app.use(express.json())


app.get("/", async(req,res)=>{
    const items=await product.find()
    res.status(201).json(items)
})
app.post("/", (req,res)=>{
    
    const {id, name}= req.body
    const item = new product({
        prductID: id,
        productname: name
    })
    item.save()
    .then(()=>{
        res.status(201).json(item)
    })
    .catch((err)=>{
        res.status(500).json({error:err})
    })

})


mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{
    console.log("Database has been connected..")

}).catch((e)=>{
    console.log(e)
})

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})

