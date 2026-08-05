import mongoose from "mongoose";

const compraSchema = new mongoose.Schema(
    {
        proveedor: {
            type:String,
            required:true
        },
        nroFactura:{
            type:String
        },
        fechaGeneracion:{
            type:Date,
            required:true

        },
        fechaVencimiento:{
            type:Date,
            required:true

        },
        valorTotal:{
            type: Number,
            required:true
        },
        pagada:{
                    type: Boolean
                },
        detalleCompra:[
            {
                producto:{
                type:String,
                required:true
                },
                cantidad:{
                     type: Number,
                    required: true

                },precioCosto:{
                    type:Number,
                    required:true
                },
                subTotal:{
                    type:Number,
                    required:true
                }, 
                
            
            } ]
    })                
               

        
export const Compra = mongoose.model("Compra", compraSchema);
    
