import { Router } from "express";
import { addProductCart,deleteCart,deleteProductCart,getCartByUser } from "../controllers/cartController.js";
import { getRequest,addProductCartRequest,deleteProductCartRequest } from "../http/request/cart.js";

const cartRouter = Router()

cartRouter.get('/cart/:id',getRequest,getCartByUser)
cartRouter.post('/cart',addProductCartRequest,addProductCart)
cartRouter.delete('/cart/:id',getRequest,deleteCart)
cartRouter.delete('/cart',deleteProductCartRequest,deleteProductCart)

export {cartRouter}