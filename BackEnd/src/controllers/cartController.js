import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

const addProductCart = async (req, res) => {
    try {
        const { user, product } = req.body

        const cart = await Cart.findOne({ user: user })

        let data

        const productDB = await Product.findById(product.productId)
        let stock = false
        const newAmount = productDB.amount - product.amount        
        if (newAmount < 0) return res.status(400).json({ message: "Cantidad no Valida" })
        if (newAmount > 0) stock = true
        productDB.amount = newAmount
        productDB.stock = stock
        await productDB.save()

        if (cart === null) {

            data = {
                user: user,
                products: [
                    {
                        productId: product.productId,
                        amount: product.amount,
                        price: product.price,
                        total: product.amount * product.price,
                        image: productDB.image
                    }
                ],
                total: product.amount * product.price
            }            
            const cartCreate = await Cart(data).save()
            res.status(200).json(cartCreate)
        } else {
            let newProduct = true            
            let totalCart = 0
            cart.products.forEach(p => {
                if(p.productId.equals(product.productId)){
                    newProduct = false
                    p.amount += product.amount
                    p.total = p.amount * p.price                                        
                }                
            });                        
            if(newProduct){
                const data = {
                    productId: product.productId,
                    amount: product.amount,
                    price: product.price,
                    total: product.amount * product.price,
                    image: productDB.image
                }
                cart.products.push(data)                
            }
            cart.products.forEach(p=>{                
                totalCart += p.total                
            })
            cart.total = totalCart
            await Cart.findByIdAndUpdate(cart.id, cart)
            res.status(200).json(await Cart.find())
        }

    } catch (error) {
        res.status(500).json({ message: "Error Interno del servidor", detail: error })
    }
}

const getCartByUser = async (req, res) => {
    try {

        const id = req.params.id

        const cart = await Cart.findOne({ user: id })

        if (cart === null) {
            res.status(404).json({ message: "Usuario sin Carrito de Compras" })
        }
        else {
            res.status(200).json(cart)
        }


    } catch (error) {
        res.status(500).json({ message: "Error Interno del servidor", detail: error })
    }
}

const deleteCart = async (req,res)=>{
    try {        
        const id = req.params.id

        const cartDb = await Cart.findOne({user:id})

        cartDb.products.forEach(async p =>{
            const productDb = await Product.findById(p.productId)
            productDb.amount += p.amount
            if(productDb.amount > 0) productDb.stock = true
            await productDb.save()
        })

        await cartDb.delete()

        res.status(200).json({message:"Carrito Eliminado Correctamente"})

    } catch (error) {
        res.status(500).json({ message: "Error Interno del servidor", detail: error })
    }
}

const deleteProductCart = async(req,res)=>{
    try {
        const {id,productId} = req.body
        const cartDb = await Cart.findById(id)
        const productDb = await Product.findById(productId)
        let total = 0
        
        cartDb.products.forEach(async (p,i) =>{
            if(p.productId == productId){
                productDb.amount += p.amount
                if(productDb.amount > 0) productDb.stock = true
                cartDb.products.splice(i,1)
            }
        })

        cartDb.products.forEach(async p =>{
            total += p.total
        })

        cartDb.total = total

        await productDb.save()
        await cartDb.save()

        res.status(200).json({message:"Producto Eliminado del Carrito Correctamente"})
        
    } catch (error) {                
        res.status(500).json({ message: "Error Interno del servidor", detail: error })
    }
}

export { addProductCart, getCartByUser, deleteCart,deleteProductCart }