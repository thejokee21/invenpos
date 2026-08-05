import mongoose from "mongoose";

const ProveedorSchema = new mongoose.Schema({
    
    nombre:{
        type:String,
        required:true
    }
})

export const Proveedor =mongoose.model("Proveedor",ProveedorSchema)