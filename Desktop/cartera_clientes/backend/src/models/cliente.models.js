import mongoose from "mongoose";
const clienteSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true,

    },
    tipoDocumento:{
        type:String,
        enum:["cedulaCiudadania","nit"],
            default:"cedulaCiudadania"
        
    },
    numeroDocumento:{
        type:String,
        required:true,
        unique:true
    },
    
    telefono:{
        type:String,
        required:true
    },
    correo:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    direccion:{
        type:String,
        required:true
    },
    activo:{
        type:Boolean,
        default:true
    },
    creditoDisponible: {
    type: Number,
    default: 0,
    min: 0
    },
    cupoCredito: {
    type: Number,
    default: 0,
    min: 0
}



})

export const cliente=mongoose.model("Cliente",clienteSchema)