import mongoose from "mongoose";

const ventaSchema = new mongoose.Schema;(
    {
        vendedor:{
        type:String,
        required:true
    },
    numeroFactura:{
        type:Number,
        required:true

    },
    fechaElaboracion:{
        type:Date,
        required:true
    },
    formaPago:{
        type:String,
        required:true
    },
    requiereEnvio:{
        type:String
    }
})

export const Venta = mongoose.model("Venta",ventaSchema);