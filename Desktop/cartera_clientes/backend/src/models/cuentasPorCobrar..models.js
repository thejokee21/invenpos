import mongoose from "mongoose";

const cuentaPagar = new mongoose.Schema({
    venta:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Venta",
        required:true
    },

    cliente:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Cliente",
        required:true
    },
    nroFactura:{
        type: String,
        required:true,
        trim:true,
        unique:true
    },
     fecha: {
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

export const deudaPagar= mongoose.model("DeudaPagar",deudaPagarSchema)