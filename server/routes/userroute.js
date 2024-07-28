import express from "express"
import { postUser } from "../controllers/usercontroller.js"

const Router= express.Router()

Router.post("/", postUser)

export default Router