import mongoose from "mongoose";
export const  connectionMongo = async ()=>{
    try{
        await mongoose.connect(process.env.URI_MONGO)
        console.log("conectado a mongpDb")

    }catch(error){
        console.log(error)

    }
}

