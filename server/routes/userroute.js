import express from "express"
import { getById, getUser, postUser } from "../controllers/usercontroller.js"

const Router= express.Router()
Router.get("/", getUser)
Router.get("/:id",getById)
Router.post("/", postUser)

export default Router