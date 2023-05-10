import { check } from "express-validator";
import MessageErrorRequest from "../middleware/messageErrorRequest.js";
import { validateJwt } from "../middleware/validateJwt.js";

const getRequest = [
    validateJwt    
]

const createSaleRequest = [
    validateJwt,
    check('user','Id del Usuario es Requerido').not().isEmpty(),    
    MessageErrorRequest
]

export {getRequest,createSaleRequest}