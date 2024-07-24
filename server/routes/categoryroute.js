import express from "express"
import { deleteCategory, getCategory, postCategory } from "../controllers/categorycontroller.js"

const Router= express.Router()

Router.get("/", getCategory)
Router.post("/", postCategory)
Router.delete("/:id", deleteCategory)

export default Router