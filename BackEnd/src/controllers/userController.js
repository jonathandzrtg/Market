import bcrypt from "bcryptjs";
import User from "../models/user.js";

const createUser = async (req,res)=>{
    try {
        const {
            username,
            email,
            password,
            admin
        } = req.body

        const salt = bcrypt.genSaltSync()
        const pass = bcrypt.hashSync(password, salt)

        const data = {
            username:username,
            email:email,
            password:pass,
            admin:admin
        }

        const user = User(data)

        const userSave = await user.save()        

        res.status(201).json(userSave)

    } catch (error) {
        res.status(500).json({message: "Error Interno del Servidor",detail: error})
    }
}

export {createUser}
