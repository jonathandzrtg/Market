import { check } from "express-validator";
import MessageErrorRequest from "../middleware/messageErrorRequest.js";

const createUserRequest = [    
    check('username','username es Requerido').not().isEmpty(),
    check('email','El Correo es requerido').not().isEmpty(),
    check('email','Correo invalido').isEmail(),
    check('password','Contraseña es Requerida').not().isEmpty(),
    check('admin','Es Administrador es Requerido').not().isEmpty(),
    MessageErrorRequest
]

export {createUserRequest}