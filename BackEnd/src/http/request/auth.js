import { check } from "express-validator";
import MessageErrorRequest from "../middleware/messageErrorRequest.js";

const authRequest = [    
    check('username','Usuario Requerido').not().isEmpty(),
    check('password','Contraseña Requerida').not().isEmpty(),    

    MessageErrorRequest
]

export {authRequest}