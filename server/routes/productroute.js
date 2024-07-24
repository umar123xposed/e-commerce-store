import express from "express"
import {getProduct, postProduct} from "../controllers/productcontroller.js"
const Router = express.Router()

Router.get("/", getProduct)

Router.post("/", postProduct)



export default Router