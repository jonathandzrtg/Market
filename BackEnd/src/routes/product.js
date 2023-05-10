import { Router } from "express";
import { createProduct,deleteProduct,getAllProducts,getProductById,updateProduct } from "../controllers/productController.js";
import { uploadImage } from "../controllers/imageController.js";
import { getRequest,createProductRequest } from "../http/request/product.js";

const productRouter = Router()

productRouter.post('/product',createProductRequest,createProduct)
productRouter.get('/product', getAllProducts)
productRouter.get('/product/:id', getProductById)
productRouter.put('/product/:id',createProductRequest,updateProduct)
productRouter.delete('/product/:id',getRequest,deleteProduct)
productRouter.post('/product/image',getRequest,uploadImage)

export {productRouter}