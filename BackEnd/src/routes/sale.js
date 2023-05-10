import { Router } from "express";
import { createSale, getAllSales } from "../controllers/saleController.js";
import { getRequest,createSaleRequest } from "../http/request/sale.js";

const saleRouter = Router()

saleRouter.post("/sale",createSaleRequest,createSale)
saleRouter.get("/sale",getRequest,getAllSales)

export {saleRouter}