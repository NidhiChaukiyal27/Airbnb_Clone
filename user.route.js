import express from "express"
import isAuth from '../middlewares/isAuth.js';

import { getCurrentUser } from "../controllers/user.controller.js"


let userRouter = express.Router()

userRouter.get("/currentUser",isAuth,getCurrentUser)


export default userRouter