import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import ProductRouter from "./routes/productroute.js"
import CategoryRouter from "./routes/categoryroute.js"

dotenv.config()
const PORT=3000


const app= express()
app.use(express.json())


app.use("/product", ProductRouter)
app.use("/category", CategoryRouter)

mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{
    console.log("Database has been connected..")

}).catch((e)=>{
    console.log(e)
})

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})

