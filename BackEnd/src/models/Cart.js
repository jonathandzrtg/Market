import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    user:{ type: Schema.Types.ObjectId, ref: "User", required: true },
    total:{type:Number,required:true},
    products:[
        { 
            productId:{type: Schema.Types.ObjectId, ref: "Product", required: true },
            amount:{type:Number,required:true},
            price:{type:Number,required:true},
            total:{type:Number,required:true},
            image:{type:String}
        }
    ]    
},
{
    timestamps:true,
    versionKey:false
})

export default model("Cart",cartSchema)