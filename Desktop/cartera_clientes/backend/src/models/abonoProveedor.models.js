import mongoose from "mongoose";

const abonoProveedorSchema = new mongoose.Schema({

    CuentaPorPagar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cuentaPagar",
        required: true
    },

    proveedor: {
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

    observaciones: {
        type: String,
        trim: true
    }

},{
    timestamps:true
});

export default mongoose.model("AbonoProveedor", abonoProveedorSchema);