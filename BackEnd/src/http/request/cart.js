import { check } from "express-validator";
import MessageErrorRequest from "../middleware/messageErrorRequest.js";
import { validateJwt } from "../middleware/validateJwt.js";


const getRequest = [
    validateJwt    
]

const addProductCartRequest = [
    validateJwt,
    check('user','Usuario es Requerido').not().isEmpty(),
    check('product','Producto es Requerido').not().isEmpty(),    
    MessageErrorRequest
]

const deleteProductCartRequest = [
    validateJwt,
    check('id','Id del Carrito es Requerido').not().isEmpty(),
    check('productId','Id del Producto es Requerido').not().isEmpty(),    
    MessageErrorRequest
]

export {getRequest,addProductCartRequest,deleteProductCartRequest}