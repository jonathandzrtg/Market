import { Schema, model } from "mongoose";

const productSchema = new Schema({
    image:{
        type:String,
        required: true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    stock:{
        type:Boolean
    }
},{
    timestamps:true,
    versionKey:false
})

export default model('Product',productSchema)