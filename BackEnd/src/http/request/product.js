import { check } from "express-validator";
import MessageErrorRequest from "../middleware/messageErrorRequest.js";
import { validateJwt } from "../middleware/validateJwt.js";


const getRequest = [
    validateJwt    
]

const createProductRequest = [
    validateJwt,
    check('name','Nombre es Requerido').not().isEmpty(),
    check('description','Descripcion es Requerida').not().isEmpty(),
    check('price','Precio es Requerido').not().isEmpty(),
    check('amount','Cantidad es Requerido').not().isEmpty(),
    check('image','imagen es Requerido').not().isEmpty(),
    MessageErrorRequest
]

export {getRequest,createProductRequest}