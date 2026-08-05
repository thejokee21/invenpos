import mongoose from "mongoose";

const cuentaPagar = new mongoose.Schema({
    compra:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Compra",
        required:true
    },

    proveedor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Proveedor",
        required:true
    },
    nroFactura:{
        type: String,
        required:true,
        trim:true,
        unique:true
    },
     fechaCompra: {
        type: Date,
        required: true
    },

    fechaVencimiento: {
        type: Date,
        required: true
    },

    valorFactura: {
        type: Number,
        required: true
    },

    totalAbonado: {
        type: Number,
        default: 0
    },

    saldoPendiente: {
        type: Number,
        required: true
    },

    estado: {
        type: String,
        enum: ["Pendiente", "Parcial", "Pagada"],
        default: "Pendiente"
    },

    observaciones: {
        type: String,
        trim:true
    }
})

export const cuentaPagar= mongoose.model("CuentaPagar",cuentaPagarSchema)