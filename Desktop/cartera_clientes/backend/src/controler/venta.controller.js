import {Venta} from '../models/venta.models.js';
export const postVenta= async (request, response) => {

    // LÓGICA DE LA PETICIÓN POST (IMPORTANTE -> manejo de errores)
    try {
        // para yo crear -> necesito enviar información 
        // la información la enviamos en el cuerpo de la petición -> body
        //así creamos colecciones en la base de datos
        const newVenta = await Venta.create(request.body); 
        return response.status(201).json({
            mensaje: 'venta creada satisfactoriamente',
            datos: newVenta
        });

    } catch (error) {
        return response.status(400).json({
            mensaje: 'Ocurrió un error, no fue posible crear la venta ',
            problema:  error.message 
        });
    }

}