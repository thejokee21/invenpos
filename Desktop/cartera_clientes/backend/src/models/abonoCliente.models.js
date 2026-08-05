import mongoose from "mongoose";

const abonoClienteSchema = new mongoose.Schema({

    cuentaPorCobrar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CuentaCobrar",
        required: true
    },

    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cliente",
        required: true
    },

    fechaAbono: {
        type: Date,
        required: true,
        default: Date.now
    },

    valorAbono: {
        type: Number,
        required: true,
        min: 0
    },

    metodoPago: {
        type: String,
        enum: [
            "Efectivo",
            "Transferencia",
            "Nequi",
            "Daviplata",
            "Tarjeta"
        ],
        required: true
    },

    numeroComprobante: {
        type: String,
        trim: true
    },
    imgComprobate:{
        type:String
    },

    observaciones: {
        type: String,
        trim: true
    }

},{
    timestamps:true
});

export default mongoose.model("AbonoCliente", abonoClienteSchema);