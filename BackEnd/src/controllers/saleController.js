import Sale from "../models/sales.js";
import Cart from "../models/Cart.js";

const createSale = async (req, res) => {
    try {        

        const {
            user            
        } = req.body

        const cartDB = await Cart.findOne({user:user})        

        const saleData = {
            user:user,
            products:cartDB.products,
            total:cartDB.total
        }

        const sale = Sale(saleData)
        const saleSave = await sale.save()

        await Cart.findOneAndDelete({user:user})

        res.status(201).json(saleSave)
        
    } catch (error) {
        res.status(500).json({ message: "Error Interno del servidor", detail: error })
    }
}

const getAllSales = async (req, res) => {
    try {
        res.send(await Sale.find())
    } catch (error) {
        res.status(500).json({ message: "Error Interno del servidor", detail: error })
    }
}

export { createSale, getAllSales }