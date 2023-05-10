
import jwt from 'jsonwebtoken';
import User from '../../models/user.js';

const messageError = (message, res) => {
    return res.status(401).json({
        status: 401,
        type: 'error',
        error: {
            title: 'Unauthorized',
            msg: message,
            param:'Authorization',
            location: 'header'
        }
    })
}

const tokenInvalid = "Token Invalido"
const tokenNoProvided = "Token no proporcionado"

const validateJwt = (req, res, next) => {
    const token = req.header('Authorization')    
    if (!token) return messageError(tokenNoProvided, res)
    const bearerToken = token.substring(7)

    jwt.verify(bearerToken, process.env.JWT_SECRET, async (err, decoded) => {

        if (err) return messageError(tokenInvalid, res)        
        const user = await User.findById(decoded.uid)        
        if (!user) return messageError(tokenInvalid, res)                        
        const { id,name, role, status } = user
        req.userAuth = { id,name, role, status }
        next()
    });
}



export { validateJwt }


