import { Router } from "express";
import login from "../controllers/authController.js";
import { authRequest } from "../http/request/auth.js";

const loginRouter = Router()

loginRouter.post("/login",authRequest,login);

export {loginRouter};