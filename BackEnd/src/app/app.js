import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { userRouter } from "../routes/user.js";
import { productRouter } from "../routes/product.js";
import { saleRouter } from "../routes/sale.js";
import { cartRouter } from "../routes/cart.js";
import { loginRouter } from "../routes/auth.js";

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());
app.use(fileUpload({limits:{fileSize:10000000},abortOnLimit:true}))
app.use(express.static('./src/upload/'))
app.use(loginRouter)
app.use(userRouter)
app.use(productRouter)
app.use(saleRouter)
app.use(cartRouter)

export default app;