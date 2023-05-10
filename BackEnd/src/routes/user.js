import { Router } from "express";
import { createUser } from "../controllers/userController.js";
import { createUserRequest } from "../http/request/user.js";

const userRouter = Router()

userRouter.post('/user',createUserRequest,createUser)

export {userRouter}