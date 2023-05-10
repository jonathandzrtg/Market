import Jwt from "jsonwebtoken";

const generateJWT = (uid = '') => {    
    return new Promise((resolve, reject) => {

        const payload = { uid }
        
        Jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' }, (err, token) => {
            if (err) {
                console.log(err)
                reject("Error to generate token")
            } else {
                resolve(token)
            }
        })
    })
}

export default generateJWT;