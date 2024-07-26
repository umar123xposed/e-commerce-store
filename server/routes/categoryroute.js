import express from "express"
import { deleteCategory, getById, getCategory, postCategory, updateCategory } from "../controllers/categorycontroller.js"

const Router= express.Router()

Router.get("/", getCategory)
Router.get("/:id", getById)
Router.post("/", postCategory)
Router.delete("/:id", deleteCategory)
Router.put("/:id", updateCategory)

export default Router