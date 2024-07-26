import express from "express"
import {deleteProduct, getById, getProduct, postProduct, updateProduct} from "../controllers/productcontroller.js"
const Router = express.Router()

Router.get("/", getProduct)
Router.get("/:id",getById)
Router.post("/", postProduct)
Router.delete("/:id", deleteProduct)
Router.put("/:id", updateProduct)


export default Router